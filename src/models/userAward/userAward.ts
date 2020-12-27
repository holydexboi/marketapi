import { Column, ForeignKey, Table, Model } from "sequelize-typescript";
import { Field, ID, ObjectType } from 'type-graphql';
import { Award } from "../award/award";
import { User } from "../user/user";

@ObjectType()
@Table
export class UserAward extends Model<UserAward> {
 
  @Field(()=> ID)
  @ForeignKey(() => User)
  @Column
  userId: number;
 
  @Field(()=> ID)
  @ForeignKey(() => Award)
  @Column
  awardId: number;
}