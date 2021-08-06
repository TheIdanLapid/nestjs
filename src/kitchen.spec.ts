import { Test, TestingModule } from '@nestjs/testing';
import { Kitchen } from './kitchen';

describe('Kitchen', () => {
  let provider: Kitchen;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Kitchen],
    }).compile();

    provider = module.get<Kitchen>(Kitchen);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
