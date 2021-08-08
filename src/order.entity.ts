import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("Orders")
export class Order {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public toppings: string;

    @Column()
    public status: number;
}