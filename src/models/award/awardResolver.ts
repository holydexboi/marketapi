import { sequelize } from "../../sequelize";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Award } from "./award";
import { AwardInput } from "./awardType";
import { User } from "../user/user";


@Resolver()
export class AwardResolver {
  private readonly awardRepository = sequelize.getRepository(Award);
  private readonly userRepository = sequelize.getRepository(User);

  @Query(() => Award)
  async getAward(@Arg('id') id: string) {
    return await this.awardRepository.findByPk(id, {include: [this.userRepository]});
  }

  @Query(() => [Award])
  async getAwards() {
    return await this.awardRepository.findAll({include: [this.userRepository]});
  }
  @Mutation(() => Award)
  async createAward(@Arg('award') awardInput: AwardInput) {
    return (await this.awardRepository.create(awardInput)).save()
  }


}