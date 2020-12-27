import { Field, Int, ObjectType } from 'type-graphql';
import {Table, Column, Model, BelongsToMany} from 'sequelize-typescript';
import { User } from '../user/user';
import { UserAward } from '../userAward/userAward';
 
@ObjectType()
@Table({tableName: "award"})
export class Award extends Model<Award> {
 
    @Field(() => Int)
    awardId(): number {return this.id}

    @Field()
    @Column
    title: string;    
    
    @BelongsToMany(() => User, () => UserAward)
    users: User[];

}