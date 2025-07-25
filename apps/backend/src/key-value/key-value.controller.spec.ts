import { Test, TestingModule } from '@nestjs/testing';
import { KeyValueController } from './key-value.controller';
import { KeyValueService } from './key-value.service';

describe('KeyValueController', () => {
  let controller: KeyValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeyValueController],
      providers: [KeyValueService],
    }).compile();

    controller = module.get<KeyValueController>(KeyValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
