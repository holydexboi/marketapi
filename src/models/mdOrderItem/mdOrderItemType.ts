import { Field, ID, InputType } from "type-graphql";

@InputType()
export class MdOrderItemType {
  @Field(() => ID)
  orderId: number;

  @Field(() => ID)
  itemId: number;
}
