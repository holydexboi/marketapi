import { Field, InputType } from "type-graphql";

@InputType()
export class MdUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  address: string;

  @Field()
  mobile: string;

  @Field()
  email: string;
}
