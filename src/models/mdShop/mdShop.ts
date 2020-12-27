import { Field, Int, ObjectType } from "type-graphql";
import {
  Table,
  Column,
  Model,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";
import { MdItem } from "../mdItem/mdItem";
import { User } from "../mdUser/mdUser";
import { MdUserShop } from "../mdUserShop/mdUserShop";

@ObjectType()
@Table({ tableName: "mdShop" })
export class MdShop extends Model<MdShop> {
  @Field(() => Int)
  mdShopId(): number {
    return this.id;
  }

  @Field()
  @Column
  name: string;

  @Field()
  @Column
  serviceType: string;

  @Field()
  @Column
  address: string;

  @Field(() => [MdItem])
  @HasMany(() => MdItem)
  items: MdItem[];

  @Field(() => [User])
  @BelongsToMany(() => User, () => MdUserShop)
  owner: User[];
}
