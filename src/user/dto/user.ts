import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class User {
  @Field({ nullable: true })
  name: string;
}
