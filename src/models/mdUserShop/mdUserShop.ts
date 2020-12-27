import { Column, ForeignKey, Table, Model } from "sequelize-typescript";
import { Field, ID, ObjectType } from "type-graphql";
import { User } from "../mdUser/mdUser";
import { MdShop } from "../mdShop/mdShop";

@ObjectType()
@Table
export class MdUserShop extends Model<MdUserShop> {
  @Field(() => ID)
  @ForeignKey(() => User)
  @Column
  userId: number;

  @Field(() => ID)
  @ForeignKey(() => MdShop)
  @Column
  shopId: number;
}
