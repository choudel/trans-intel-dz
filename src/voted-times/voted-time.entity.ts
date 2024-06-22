import { Time } from 'src/times/time.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class VotedTime {
  @PrimaryGeneratedColumn()
  votedTimesId: number;

  @Column({ type: 'timestamptz' })
  votedDeparture: Date;

  @Column({ type: 'timestamptz' })
  votedArrival: Date;

  @ManyToOne(() => Time, (time) => time.votedTimes)
  votedTimes: Time;
}
