import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';
import { UserServiceImpl } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [
    UserResolver, UserServiceImpl
  ]
})
export class UserModule { }
