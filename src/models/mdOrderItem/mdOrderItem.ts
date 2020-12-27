import { Column, ForeignKey, Table, Model } from "sequelize-typescript";
import { Field, ID, ObjectType } from "type-graphql";
import { MdOrder } from "../mdOrder/mdOrder";
import { MdItem } from "../mdItem/mdItem";

@ObjectType()
@Table
export class MdOrderItem extends Model<MdOrderItem> {
  @Field(() => ID)
  @ForeignKey(() => MdOrder)
  @Column
  orderId: number;

  @Field(() => ID)
  @ForeignKey(() => MdItem)
  @Column
  itemId: number;
}
