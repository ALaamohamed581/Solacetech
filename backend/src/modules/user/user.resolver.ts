import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDto, UserInput } from './models/usersInputs';
import { UserService } from './user.service';
import { UserArgs } from './models/args/userArgs';

@Resolver(() => UserDto)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Mutation(() => UserDto)
  async createUser(@Args('input') input: UserInput) {
    return this.userService.createUser(input);
  }
  @Mutation(() => UserDto)
  async EditUesr(@Args('id') id: string, @Args('input') input: UserInput) {
    return this.userService.edit(id, input);
  }
  @Query(() => UserDto, { name: 'user' })
  async getUser(@Args() getUserArgs: UserArgs) {
    return this.userService.getUserArgs(getUserArgs);
  }
}
