import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserEmailIsUnique } from './validations/UserEmailIsUnique';

@Module({
  imports: [],
  providers: [UserService, UserResolver, UserEmailIsUnique],
})
export class UserModule {}
