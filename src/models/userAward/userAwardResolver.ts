import { sequelize } from "../../sequelize";
import { Arg, Mutation, Resolver } from "type-graphql";
import { UserAward } from "./userAward";
import { UserAwardType } from "./userAwardType";


@Resolver()
export class UserAwardResolver {

  private readonly userAwardRepository = sequelize.getRepository(UserAward)

  @Mutation(() => UserAward)
  async addAwardToUser(@Arg('userAward') userAwardInput: UserAwardType) { 
    const userAward = (await this.userAwardRepository.create(userAwardInput)).save()
    return userAward;
  }
}