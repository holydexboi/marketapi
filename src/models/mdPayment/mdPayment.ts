import { Field, Int, ObjectType } from "type-graphql";
import { Table, Column, Model, HasMany } from "sequelize-typescript";
import { MdOrder } from "../mdOrder/mdOrder";
import { User } from "../mdUser/mdUser";

@ObjectType()
@Table({ tableName: "mdPayment" })
export class MdPayment extends Model<MdPayment> {
  @Field(() => Int)
  mdPaymentId(): number {
    return this.id;
  }

  @Field()
  @Column
  amount: string;

  @Field(() => [MdOrder])
  @HasMany(() => MdOrder)
  orders: MdOrder[];

  @Field(() => [User])
  @HasMany(() => User)
  user: User[];
}
