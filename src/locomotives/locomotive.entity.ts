import { Time } from 'src/times/time.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Locomotive {
  @PrimaryGeneratedColumn()
  locomotiveId: number;

  @Column()
  name: string;

  @Column()
  immatriculation: string;

  @Column()
  rating: number;

  @Column()
  score: number;

  @Column()
  time0_1: number;

  @Column()
  time1_2: number;

  @Column()
  time2_3: number;

  @Column()
  time3_4: number;

  @Column()
  time4_5: number;

  @Column()
  time5_6: number;

  @Column()
  time6_7: number;

  @Column()
  time7_8: number;

  @Column()
  time8_9: number;

  @Column()
  time9_10: number;

  @Column()
  time10_11: number;

  @Column()
  time11_12: number;

  @Column()
  time12_13: number;

  @Column()
  time13_14: number;

  @Column()
  time14_15: number;

  @Column()
  time15_16: number;

  @Column()
  time16_17: number;

  @Column()
  time17_18: number;

  @Column()
  time18_19: number;

  @Column()
  time19_20: number;

  @Column()
  time20_21: number;

  @Column()
  time21_22: number;

  @Column()
  time22_23: number;

  @Column()
  time23_0: number;

  @OneToMany(() => Time, (time) => time.locomotive)
  times: Time[];
}
