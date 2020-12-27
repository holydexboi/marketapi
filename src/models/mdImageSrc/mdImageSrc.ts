import { Field, Int, ObjectType } from "type-graphql";
import { Table, Column, Model, BelongsTo } from "sequelize-typescript";
import { MdItem } from "../mdItem/mdItem";

@ObjectType()
@Table({ tableName: "mdImageSrc" })
export class MdImageSrc extends Model<MdImageSrc> {
  @Field(() => Int)
  mdImageSrcId(): number {
    return this.id;
  }

  @Field()
  @Column
  filename: string;

  @BelongsTo(() => MdItem)
  item: MdItem[];
}
