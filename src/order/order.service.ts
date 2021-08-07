import { Injectable } from "@nestjs/common";
import {Order} from '../../order.entity';
import { diskStorage } from 'multer';
import { Connection, ConnectionManager, Repository } from "typeorm";


@Injectable()
export class OrderService {
    
constructor(private connection: Connection) {
    @InjectRepository(Order)
    usersRepository: new Repository<Order>() {
        
    };
}

// const Database = require('better-sqlite3');
// const db = new this.Database('foobar.db', { verbose: console.log });

// const row = this.db.prepare('SELECT * FROM users WHERE id = ?').get(1);
// console.log(row.firstName, row.lastName, row.email);

async createMany(orders: Order[]) {
    const queryRunner = this.connection.createQueryRunner();
  
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(orders[0]);
      await queryRunner.manager.save(orders[1]);
  
      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }
  
}
