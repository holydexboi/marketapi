import { Field, InputType, ID } from "type-graphql";

@InputType()
export class MdItemInput {
  @Field()
  title: string;

  @Field()
  subtitle: string;

  @Field()
  description: string;

  @Field()
  price: string;

  @Field()
  discount: string;

  @Field()
  quantity: string;

  @Field(() => ID!)
  shopId: number;
}
