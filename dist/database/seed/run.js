"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const datasource_1 = require("../datasource");
const user_entity_1 = require("../tables/user.entity");
const profile_entity_1 = require("../tables/profile.entity");
const post_entity_1 = require("../tables/post.entity");
const event_queue_post_entity_1 = require("../tables/event_queue_post.entity");
const crypto_1 = require("crypto");
const posts_1 = require("./posts");
const SEED_EMAIL = 'seed.user@local.dev';
const SEED_USERNAME = 'seed_demo';
const DESIRED_POSTS = 45;
async function main() {
    if (process.env.NODE_ENV === 'production') {
        console.log('Seed skipped in production.');
        return;
    }
    await datasource_1.Database.initialize();
    const qr = datasource_1.Database.createQueryRunner();
    await qr.connect();
    await qr.startTransaction();
    try {
        // prevent double-run
        await qr.query('SELECT pg_advisory_lock($1)', [987654321]);
        await seedUserProfileAndPosts(qr.manager);
        await qr.commitTransaction();
        console.log('✅ Seed complete');
    }
    catch (e) {
        await qr.rollbackTransaction();
        console.error('❌ Seed failed:', e);
        process.exitCode = 1;
    }
    finally {
        await qr.release();
        await datasource_1.Database.destroy();
    }
}
async function seedUserProfileAndPosts(tx) {
    const userRepo = tx.getRepository(user_entity_1.User);
    const profileRepo = tx.getRepository(profile_entity_1.Profile);
    const postRepo = tx.getRepository(post_entity_1.Post);
    const eventRepo = tx.getRepository(event_queue_post_entity_1.EventQueuePost);
    let user = await userRepo.findOne({ where: { email: SEED_EMAIL } });
    if (!user) {
        const userData = {
            email: SEED_EMAIL,
            password: undefined,
            name: 'Seed Demo',
            username: SEED_USERNAME,
            walletAddress: undefined,
            walletNonce: undefined,
            refreshToken: undefined,
            isBanned: false,
            isDeleted: false,
            role: user_entity_1.Role.PROFILE,
            followersCount: 0,
            subscriptionsCount: 0,
            followingCount: 0,
        };
        user = await userRepo.save(userRepo.create(userData));
        console.log(`👤 Created user ${user.id}`);
    }
    else {
        console.log(`👤 Reusing existing user ${user.id}`);
    }
    let profile = await profileRepo.findOne({
        where: [{ userId: user.id }],
    });
    if (!profile) {
        const profileData = {
            userId: user.id,
            bio: 'Demo profile seeded for local/dev.',
            isVerified: false,
            subscribersCount: 0,
        };
        profile = await profileRepo.save(profileRepo.create(profileData));
        console.log(`🧾 Created profile ${profile.id}`);
    }
    else {
        console.log(`🧾 Reusing existing profile ${profile.id}`);
    }
    // 3) Posts — top up to DESIRED_POSTS
    const existing = await postRepo.count({ where: { profileId: profile.id } });
    const toCreate = Math.max(0, DESIRED_POSTS - existing);
    if (toCreate === 0) {
        console.log(`📝 Already have ${existing} posts. Skipping.`);
        return;
    }
    const captions = posts_1.POST_CAPTIONS.length > 0 ? posts_1.POST_CAPTIONS : Array.from({ length: DESIRED_POSTS }, (_, i) => `Seed post #${i + 1}`);
    const postRows = Array.from({ length: toCreate }, (_, i) => {
        const n = existing + i + 1;
        const caption = captions[i % captions.length];
        return {
            profileId: profile.id,
            caption: caption ?? `Seed post #${n}`,
            accessType: post_entity_1.AccessType.PUBLIC,
            type: post_entity_1.PostType.TEXT,
            inPortfolio: false,
            likeCount: 0,
            dislikeCount: 0,
            commentCount: 0,
        };
    });
    const savedPosts = await postRepo.save(postRepo.create(postRows));
    console.log(`📝 Created ${toCreate} posts (total now ${existing + toCreate}).`);
    // 4) Enqueue events for each created post
    const eventRows = savedPosts.map((post) => {
        const correlationId = (0, crypto_1.randomUUID)();
        const payload = buildPostCreatedPayload(post, correlationId);
        return {
            exchange: 'aiData',
            routingKey: 'post.created',
            correlationId,
            payload,
            // occurredAt will be set by @CreateDateColumn
            publishedAt: null,
            publishAttempts: 0,
            nextAttemptAt: null,
        };
    });
    await eventRepo.save(eventRepo.create(eventRows));
    console.log(`📫 Enqueued ${eventRows.length} 'post.created' events.`);
}
/** Builds the payload exactly as requested */
function buildPostCreatedPayload(post, correlationId) {
    const createdAtIso = post.createdAt instanceof Date ? post.createdAt.toISOString() : new Date().toISOString();
    return {
        event_type: 'post.created',
        timestamp: new Date().toISOString(),
        correlation_id: correlationId,
        data: {
            id: post.id,
            creator_id: post.profileId,
            post_type: 'normal', // always "normal" for now
            reference_id: null,
            title: post.caption,
            content_type: 'post',
            content_data: {
                text: post.caption,
                description: post.caption,
            },
            s3_url: null,
            preview_image_url: null,
            is_blurred: false,
            visibility: post.accessType === post_entity_1.AccessType.PUBLIC ? 'free' : 'paid',
            tier_id: null,
            one_time_price: null,
            tags: [],
            created_at: createdAtIso,
        },
        metadata: {
            source: 'post-service',
            version: '1.0',
            retry_count: 0,
        },
    };
}
main().catch((e) => {
    console.error(e);
    process.exit(1);
});
//# sourceMappingURL=run.js.map