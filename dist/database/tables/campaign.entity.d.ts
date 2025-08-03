import { Brand } from './brand.entity';
import { Task } from './task.entity';
import { Payment } from './payment.entity';
export declare class Campaign {
    id: string;
    brand: Brand;
    name: string;
    description: string;
    brandId: string;
    tasks: Task[];
    amountToInvest: number;
    startDate: Date;
    endDate: Date;
    payment: Payment;
    createdAt: Date;
    updatedAt: Date;
}
