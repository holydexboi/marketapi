import { Field, Int, ObjectType } from 'type-graphql';
import {Table, Column, Model, HasMany, BelongsToMany} from 'sequelize-typescript';
import {Transaction } from '../transaction/transaction'
import { UserAward } from '../userAward/userAward';
import { Award } from '../award/award'

@ObjectType()
@Table({tableName: "user"})
export class User extends Model<User> {

    @Field(() => Int)
    userId(): number {return this.id}

    @Field()
    @Column
    firstName: string;

    @Field()
    @Column
    lastName: string
    
    @Field()
    @Column
    birthday: Date;
    
    @Field(() => [Transaction])
    @HasMany(() => Transaction)
    transactions: Transaction[];
    
    @Field(() => [Award])
    @BelongsToMany(() => Award, () => UserAward)
    awards: Award[];
}