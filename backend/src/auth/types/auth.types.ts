import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthTokenObject {
  @Field()
  token: string;

  @Field()
  expiry: Date;
}
