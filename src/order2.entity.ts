import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public toppings: string;

    @Column()
    public status: string;
}