import { Test, TestingModule } from '@nestjs/testing';
import { LocomotivesController } from './locomotives.controller';

describe('LocomotivesController', () => {
  let controller: LocomotivesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocomotivesController],
    }).compile();

    controller = module.get<LocomotivesController>(LocomotivesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
