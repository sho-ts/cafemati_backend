import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user';
import { UserServiceImpl } from './user.service';

@Resolver(of => User)
export class UserResolver {
  constructor(
    private userService: UserServiceImpl
  ) { }

  @Query(returns => User)
  async getUser(@Args('id') id: string) {
    return await this.userService.findById(id);
  }
}
