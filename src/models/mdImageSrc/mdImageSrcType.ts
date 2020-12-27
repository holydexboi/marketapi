import { Field, InputType } from "type-graphql";

@InputType()
export class MdImageSrcInput {
  @Field()
  filename: string;
}
