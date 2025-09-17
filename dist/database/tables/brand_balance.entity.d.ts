import { Brand } from './brand.entity';
export declare class BrandBalance {
    id: string;
    brand: Brand;
    brandId: string;
    available: number;
    totalFeesCollected: number;
    createdAt: Date;
    updatedAt: Date;
}
