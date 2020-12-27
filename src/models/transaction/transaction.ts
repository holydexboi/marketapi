import { Field, Int, ObjectType } from 'type-graphql';
import {Table, Column, Model, BelongsTo, ForeignKey} from 'sequelize-typescript';
import { User } from '../user/user';
 
@ObjectType()
@Table({tableName: "transaction"})
export class Transaction extends Model<Transaction> {
 
    @Field(() => Int)
    transactionId(): number {return this.id}

    @Field()
    @Column
    title: string;
    
    @Field()
    @Column
    value: string
        
    @Field()
    @ForeignKey(() => User)
    @Column
    userId: number;
    
    @BelongsTo(() => User)
    user: User[];
}