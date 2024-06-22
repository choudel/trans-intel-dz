import { Module } from '@nestjs/common';
import { TimesController } from './times.controller';
import { TimesService } from './times.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Time } from './time.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Time])],
  controllers: [TimesController],
  providers: [TimesService],
})
export class TimesModule {}
