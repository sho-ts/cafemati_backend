import type { UserServiceType } from './types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user';

@Injectable()
export class UserServiceImpl {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async findById(userId: string) {
    return await this.userRepository.findOne({
      where: {
        userId
      }
    })
  }
}
