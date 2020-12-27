import { Field, InputType, ID } from "type-graphql";

@InputType()
export class MdShopInput {
  @Field()
  name: string;

  @Field()
  serviceType: string;

  @Field()
  address: string;

  @Field(() => ID!)
  ownerId: number;
}
