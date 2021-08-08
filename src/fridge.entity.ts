import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Fridge {
    constructor(peppers?: number, corn?: number, mushrooms?: number, olives?: number) {
        if (peppers) {
            this.peppers = peppers;
        }
        else {
            this.peppers = 3;
        }
        if (corn) {
            this.corn = corn;
        }
        else {
            this.corn = 3;
        }
        if (mushrooms) {
            this.mushrooms = mushrooms;
        }
        else {
            this.mushrooms = 3;
        }
        if (olives) {
            this.olives = olives;
        }
        else {
            this.olives = 3;
        }
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    peppers: number;
    
    @Column()
    corn: number;

    @Column()
    mushrooms: number;

    @Column()
    olives: number;
}