import { Field, InputType } from "type-graphql";

@InputType()
export class MdPaymentInput {
  @Field()
  amount: string;

  @Field()
  order: string;

  @Field()
  user: string;
}
