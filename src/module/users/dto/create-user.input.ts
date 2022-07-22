import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlphanumeric } from 'class-validator';
import { RoleType } from '../user.enum.';

@InputType()
export class CreateUserInput {
  @IsAlphanumeric()
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field()
  role: RoleType;
}
