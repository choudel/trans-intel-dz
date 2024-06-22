import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locomotive } from './locomotive.entity';

@Injectable()
export class LocomotivesService {
  constructor(
    @InjectRepository(Locomotive)
    private usersRepository: Repository<Locomotive>,
  ) {}

  findAll(): Promise<Locomotive[]> {
    return this.usersRepository.find();
  }

  findOne(locomotiveId: number): Promise<Locomotive | null> {
    return this.usersRepository.findOneBy({ locomotiveId });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
