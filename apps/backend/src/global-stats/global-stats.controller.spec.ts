import { Test, TestingModule } from '@nestjs/testing';
import { GlobalStatsController } from './global-stats.controller';
import { GlobalStatsService } from './global-stats.service';

describe('GlobalStatsController', () => {
  let controller: GlobalStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GlobalStatsController],
      providers: [GlobalStatsService],
    }).compile();

    controller = module.get<GlobalStatsController>(GlobalStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
