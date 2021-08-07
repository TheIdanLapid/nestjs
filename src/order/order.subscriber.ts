import sinon from 'sinon';
import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
  } from 'typeorm';
  import { Order } from '../../order.entity';
  
  @EventSubscriber()
  export class OrderSubscriber implements EntitySubscriberInterface<Order> {
    constructor(connection: Connection) {
      connection.subscribers.push(this);
    }
  
    listenTo() {
      return Order;
    }
  
    beforeInsert(event: InsertEvent<Order>) {
      console.log(`BEFORE Order INSERTED: `, event.entity);
    }
  }
  