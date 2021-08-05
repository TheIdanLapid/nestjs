import { Status } from "../status.model";

export class Order {
constructor(
    public id: string,
    public title: string,
    public status: Status,
    public time: number,
) {}
}