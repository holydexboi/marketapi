import { sequelize } from "../../sequelize";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { MdShop } from "./mdShop";
import { User } from "../mdUser/mdUser";
import { MdShopInput } from "./mdShopType";
import { MdItem } from "../mdItem/mdItem";

@Resolver()
export class MdShopResolver {
  private readonly mdShopRepository = sequelize.getRepository(MdShop);
  private readonly userRepository = sequelize.getRepository(User);
  private readonly mdItemRepository = sequelize.getRepository(MdItem);

  @Query(() => MdShop)
  async getShop(@Arg("id") id: number): Promise<MdShop | null> {
    return await this.mdShopRepository.findByPk(id, {
      include: [this.userRepository, this.mdItemRepository],
    });
  }

  @Query(() => [MdShop])
  async getShops(): Promise<MdShop[] | null> {
    return await this.mdShopRepository.findAll({
      include: [this.userRepository, this.mdItemRepository],
    });
  }

  @Mutation(() => MdShop)
  async createShop(
    @Arg("mdShop") mdShopInput: MdShopInput
  ): Promise<MdShop | null> {
    const newMdShop = await (
      await this.mdShopRepository.create(mdShopInput)
    ).save();
    console.log("New shop created", newMdShop);
    return newMdShop;
  }

  @Mutation(() => Int)
  async updateShop(
    @Arg("mdShop") mdShopInput: MdShopInput,
    @Arg("ShopId") shopId: string
  ): Promise<number | null> {
    const result = await this.mdShopRepository.update(mdShopInput, {
      where: { id: shopId },
    });
    console.log("Result ===>", result);
    return result[0];
  }
}
