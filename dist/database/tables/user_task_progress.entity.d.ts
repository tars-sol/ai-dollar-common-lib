import { Profile } from './profile.entity';
import { Task } from './task.entity';
export declare class UserTaskProgress {
    id: string;
    user: Profile;
    userId: string;
    task: Task;
    taskId: string;
    isCompletedByUser: boolean;
    isMarkedDoneByBrand: boolean;
    brandComment?: string;
    updatedAt: Date;
}
