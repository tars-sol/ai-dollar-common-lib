import { Campaign } from './campaign.entity';
export declare enum TaskType {
    IN_APP = "IN_APP",
    OFF_APP = "OFF_APP",
    ON_CHAIN = "ON_CHAIN"
}
export declare class Task {
    id: string;
    campaign: Campaign;
    campaignId: string;
    title: string;
    type: TaskType;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
