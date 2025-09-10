"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const datasource_1 = require("../datasource");
const user_entity_1 = require("../tables/user.entity");
const profile_entity_1 = require("../tables/profile.entity");
const post_entity_1 = require("../tables/post.entity");
const SEED_EMAIL = 'seed.user@local.dev';
const SEED_USERNAME = 'seed_demo';
const DESIRED_POSTS = 30;
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
    let user = await userRepo.findOne({ where: { email: SEED_EMAIL } });
    if (!user) {
        const userData = {
            email: SEED_EMAIL,
            password: undefined,
            walletAddress: undefined,
            walletNonce: undefined,
            refreshToken: undefined,
            isBanned: false,
            isDeleted: false,
            role: user_entity_1.Role.PROFILE,
            followersCount: 0,
            followingCount: 0,
        };
        user = userRepo.create(userData);
        user = await userRepo.save(user);
        console.log(`👤 Created user ${user.id}`);
    }
    else {
        console.log(`👤 Reusing existing user ${user.id}`);
    }
    let profile = await profileRepo.findOne({
        where: [{ userId: user.id }, { username: SEED_USERNAME }],
    });
    if (!profile) {
        const profileData = {
            userId: user.id,
            username: SEED_USERNAME,
            name: 'Seed Demo',
            bio: 'Demo profile seeded for local/dev.',
            isVerified: false,
            subscribersCount: 0,
            subscriptionsCount: 0,
        };
        profile = profileRepo.create(profileData);
        profile = await profileRepo.save(profile);
        console.log(`🧾 Created profile ${profile.id}`);
    }
    else {
        console.log(`🧾 Reusing existing profile ${profile.id}`);
    }
    const existing = await postRepo.count({ where: { profileId: profile.id } });
    const toCreate = Math.max(0, DESIRED_POSTS - existing);
    if (toCreate === 0) {
        console.log(`📝 Already have ${existing} posts. Skipping.`);
        return;
    }
    const postRows = Array.from({ length: toCreate }, (_, i) => {
        const n = existing + i + 1;
        return {
            profileId: profile.id,
            caption: `Seed post #${n} — hello from the seeder 👋`,
            accessType: post_entity_1.AccessType.PUBLIC,
            type: post_entity_1.PostType.TEXT,
            inPortfolio: false,
            likeCount: 0,
            dislikeCount: 0,
            commentCount: 0,
        };
    });
    const posts = postRepo.create(postRows);
    await postRepo.save(posts);
    console.log(`📝 Created ${toCreate} posts (total now ${existing + toCreate}).`);
}
main().catch((e) => {
    console.error(e);
    process.exit(1);
});
//# sourceMappingURL=run.js.map