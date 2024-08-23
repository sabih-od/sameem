import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usersubscriptions')
export class UserSubscription {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    customer_id: string;

    @Column()
    subscription_id: string;

    @Column('decimal', { precision: 10, scale: 2 })
    subscription_price: number;
}
