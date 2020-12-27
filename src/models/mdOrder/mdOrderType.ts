import { Field, InputType } from "type-graphql";

@InputType()
export class MdOrderInput {
  @Field()
  code: string;

  @Field()
  status: string;
}
