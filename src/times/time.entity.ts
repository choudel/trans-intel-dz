import { Locomotive } from 'src/locomotives/locomotive.entity';
import { VotedTime } from 'src/voted-times/voted-time.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Time {
  @PrimaryGeneratedColumn()
  timeId: number;

  @Column()
  day: string;

  @Column({ type: 'timestamptz' })
  programedDeparture: Date;

  @Column({ type: 'timestamptz' })
  programedArrival: Date;

  @Column()
  likes: number;

  @Column()
  dislikes: number;

  @ManyToOne(() => Locomotive, (locomotive) => locomotive.times)
  locomotive: Locomotive;
  @OneToMany(() => VotedTime, (votedTime) => votedTime.votedTimes)
  votedTimes: VotedTime[];
}
