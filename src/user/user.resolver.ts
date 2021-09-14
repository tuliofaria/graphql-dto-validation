import { Query, Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { User } from './dto/user';
import { UserCreateInput } from './dto/user.input';

@Resolver(of => User)
export class UserResolver {
  @Query(() => Int)
  user() {
    return 10;
  }
  @Mutation(returns => User, { name: 'createUser' })
  async createUser(@Args('input') input: UserCreateInput): Promise<null> {
    return;
  }
}
