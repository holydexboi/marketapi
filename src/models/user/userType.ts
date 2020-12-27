import { Field, InputType } from 'type-graphql';

@InputType()
export class UserInput {
 
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  birthday: Date;
 
}