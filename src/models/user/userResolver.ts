import { sequelize } from "../../sequelize";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { User } from "./user";
import { Transaction } from "../transaction/transaction";
import { UserInput } from "./userType";
import { Award } from "../award/award";


@Resolver()
export class UserResolver {
  private readonly userRepository = sequelize.getRepository(User);
  private readonly transactionRepository = sequelize.getRepository(Transaction);
  private readonly awardRepository = sequelize.getRepository(Award)

  @Query(() => User)
  async getUser(@Arg('id') id: number): Promise<User| null> {
    return await this.userRepository.findByPk(id, {include: [this.transactionRepository, this.awardRepository ]} );
  }

  @Query(() => [User])
  async getUsers(): Promise<User[] | null> {
    return await this.userRepository.findAll({include: [this.transactionRepository, this.awardRepository ]});
  }

  @Mutation(() => User)
  async createUser(@Arg('user') userInput: UserInput): Promise<User| null>  { 
    const newUser = await (await this.userRepository.create(userInput)).save()
    console.log("New user created", newUser)
    return newUser;
  }

  @Mutation(()=> Int)
  async updateUser(@Arg('newUser') userInput: UserInput, @Arg('userId') userId: string): Promise< number| null> {
      const result = await this.userRepository.update(userInput, {where: {id: userId}})
      console.log("Result ===>", result)
      return result[0]
  }
}