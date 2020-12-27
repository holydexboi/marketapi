import { Field, ID, InputType } from 'type-graphql';


@InputType()
export class UserAwardType {
 
  @Field(()=> ID)
  userId: number;
 
  @Field(()=> ID)
  awardId: number;
}