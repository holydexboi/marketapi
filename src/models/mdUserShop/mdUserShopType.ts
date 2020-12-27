import { Field, ID, InputType } from "type-graphql";

@InputType()
export class MdUserShopType {
  @Field(() => ID)
  userId: number;

  @Field(() => ID)
  shopId: number;
}
