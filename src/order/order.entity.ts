import { Status } from "../status.model";

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public toppings: string;

    @Column()
    public status: Status;
}