import { sequelize } from "../../sequelize";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { User } from "./mdUser";
import { MdOrder } from "../mdOrder/mdOrder";
import { MdShop } from "../mdShop/mdShop";
import { MdUserInput } from "./mdUserType";

@Resolver()
export class MdUserResolver {
  private readonly mdUserRepository = sequelize.getRepository(User);
  private readonly mdOrderRepository = sequelize.getRepository(MdOrder);
  private readonly mdShopRepository = sequelize.getRepository(MdShop);

  @Query(() => User)
  async getMdUser(@Arg("id") id: number): Promise<User | null> {
    return await this.mdUserRepository.findByPk(id, {
      include: [this.mdOrderRepository, this.mdShopRepository],
    });
  }

  @Query(() => [User])
  async getMdUsers(): Promise<User[] | null> {
    return await this.mdUserRepository.findAll({
      include: [this.mdOrderRepository, this.mdShopRepository],
    });
  }

  @Mutation(() => User)
  async createMdUser(
    @Arg("user") mdUserInput: MdUserInput
  ): Promise<User | null> {
    const newMdUser = await (
      await this.mdUserRepository.create(mdUserInput)
    ).save();
    console.log("New user created", newMdUser);
    return newMdUser;
  }

  @Mutation(() => Int)
  async updateMdUser(
    @Arg("newUser") mdUserInput: MdUserInput,
    @Arg("userId") userId: string
  ): Promise<number | null> {
    const result = await this.mdUserRepository.update(mdUserInput, {
      where: { id: userId },
    });
    console.log("Result ===>", result);
    return result[0];
  }
}
