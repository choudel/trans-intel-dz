import { Module } from '@nestjs/common';
import { LocomotivesController } from './locomotives.controller';
import { LocomotivesService } from './locomotives.service';
import { Locomotive } from './locomotive.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Locomotive])],
  controllers: [LocomotivesController],
  providers: [LocomotivesService],
})
export class LocomotivesModule {}
