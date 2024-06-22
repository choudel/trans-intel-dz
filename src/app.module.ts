import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { DataSource } from 'typeorm';
import { LocomotivesModule } from './locomotives/locomotives.module';
import { Locomotive } from './locomotives/locomotive.entity';
import { TimesModule } from './times/times.module';
import { Time } from './times/time.entity';
import { VotedTimesModule } from './voted-times/voted-times.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'choudel',
      password: 'pol01mol',
      database: 'trans-intel',
      entities: [User, Locomotive, Time],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    LocomotivesModule,
    TimesModule,
    VotedTimesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
