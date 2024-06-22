import { Test, TestingModule } from '@nestjs/testing';
import { LocomotivesService } from './locomotives.service';

describe('LocomotivesService', () => {
  let service: LocomotivesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocomotivesService],
    }).compile();

    service = module.get<LocomotivesService>(LocomotivesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
