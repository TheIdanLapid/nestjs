import { Status } from "../status.model";
export declare class Order {
    id: string;
    title: string;
    status: Status;
    time: number;
    constructor(id: string, title: string, status: Status, time: number);
}
