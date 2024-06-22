import { Test, TestingModule } from '@nestjs/testing';
import { VotedTimesController } from './voted-times.controller';

describe('VotedTimesController', () => {
  let controller: VotedTimesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VotedTimesController],
    }).compile();

    controller = module.get<VotedTimesController>(VotedTimesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
