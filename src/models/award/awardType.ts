import { Field, InputType } from 'type-graphql';

@InputType()
export class AwardInput {

  @Field()
  title: string;
 
}