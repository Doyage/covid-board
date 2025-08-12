import { Test, TestingModule } from '@nestjs/testing';
import { CountiresController } from './countires.controller';

describe('CountiresController', () => {
  let controller: CountiresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountiresController],
    }).compile();

    controller = module.get<CountiresController>(CountiresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
