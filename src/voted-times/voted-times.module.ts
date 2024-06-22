import { Module } from '@nestjs/common';
import { VotedTimesController } from './voted-times.controller';
import { VotedTimesService } from './voted-times.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VotedTime } from './voted-time.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VotedTime])],
  controllers: [VotedTimesController],
  providers: [VotedTimesService],
})
export class VotedTimesModule {}
