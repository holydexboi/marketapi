import { Field, Int, ObjectType } from "type-graphql";
import { Table, Column, Model, HasMany, BelongsTo } from "sequelize-typescript";
import { MdImageSrc } from "../mdImageSrc/mdImageSrc";
import { MdShop } from "../mdShop/mdShop";

@ObjectType()
@Table({ tableName: "mdUser" })
export class MdItem extends Model<MdItem> {
  @Field(() => Int)
  mdItemId(): number {
    return this.id;
  }

  @Field()
  @Column
  title: string;

  @Field()
  @Column
  subtitle: string;

  @Field()
  @Column
  description: string;

  @Field()
  @Column
  price: string;

  @Field()
  @Column
  discount: string;

  @Field()
  @Column
  quantity: string;

  @Field(() => [MdImageSrc])
  @HasMany(() => MdImageSrc)
  imageSrc: MdImageSrc[];

  @BelongsTo(() => MdShop)
  shop: MdShop[];
}
