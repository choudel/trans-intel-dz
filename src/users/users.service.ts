import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(userId: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ userId });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
