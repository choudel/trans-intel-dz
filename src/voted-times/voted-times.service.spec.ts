import { Test, TestingModule } from '@nestjs/testing';
import { VotedTimesService } from './voted-times.service';

describe('VotedTimesService', () => {
  let service: VotedTimesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VotedTimesService],
    }).compile();

    service = module.get<VotedTimesService>(VotedTimesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
