import { Field, Int, ObjectType } from "type-graphql";
import {
  Table,
  Column,
  Model,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";
import { MdOrder } from "../mdOrder/mdOrder";
import { MdShop } from "../mdShop/mdShop";
import { MdUserShop } from "../mdUserShop/mdUserShop";

@ObjectType()
@Table({ tableName: "mdUser" })
export class User extends Model<User> {
  @Field(() => Int)
  userId(): number {
    return this.id;
  }

  @Field()
  @Column
  firstName: string;

  @Field()
  @Column
  lastName: string;

  @Field()
  @Column
  address: string;

  @Field()
  @Column
  email: string;

  @Field()
  @Column
  mobile: string;

  @Field(() => [MdOrder])
  @HasMany(() => MdOrder)
  orders: MdOrder[];

  @Field(() => [MdShop])
  @BelongsToMany(() => MdShop, () => MdUserShop)
  shop: MdShop[];
}
