import { Test, TestingModule } from '@nestjs/testing';
import { Connection, ConnectionManager, Repository } from 'typeorm';
import { Order } from './order';
import sinon from 'sinon';

describe('Auth service Unit tests:', () => {
  const sandbox = sinon.createSandbox()
  beforeEach(() => {
   sandbox.stub(ConnectionManager.prototype, 'get').returns({
     getRepository: sandbox.stub().returns(sinon.createStubInstance(Repository))
   } as unknown as Connection)
  });

  afterEach(() => {
    sandbox.restore();
  })

  it('login() with valid username and password', (done) => {
     // Test here 
  }) 
})

describe('Order', () => {
  let provider: Order;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Order],
    }).compile();

    provider = module.get<Order>(Order);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
