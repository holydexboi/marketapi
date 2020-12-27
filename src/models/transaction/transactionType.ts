import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class TransactionInput {
 
  @Field(()=> ID!)
  userId: number

  @Field()
  title: string;

  @Field()
  value: string;
 
 
}