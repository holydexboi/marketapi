import { sequelize } from "../../sequelize";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { MdItem } from "./mdItem";
import { MdImageSrc } from "../mdImageSrc/mdImageSrc";
import { MdItemInput } from "./mdItemType";
import { MdShop } from "../mdShop/mdShop";

@Resolver()
export class MdItemResolver {
  private readonly mdItemRepository = sequelize.getRepository(MdItem);
  private readonly mdShopRepository = sequelize.getRepository(MdShop);
  private readonly mdImageSrcRepository = sequelize.getRepository(MdImageSrc);

  @Query(() => MdItem)
  async getItem(@Arg("id") id: number): Promise<MdItem | null> {
    return await this.mdItemRepository.findByPk(id, {
      include: [this.mdShopRepository, this.mdImageSrcRepository],
    });
  }

  @Query(() => [MdItem])
  async getItems(): Promise<MdItem[] | null> {
    return await this.mdItemRepository.findAll({
      include: [this.mdShopRepository, this.mdImageSrcRepository],
    });
  }

  @Mutation(() => MdItem)
  async createItem(
    @Arg("item") mdItemInput: MdItemInput
  ): Promise<MdItem | null> {
    const newItem = await (
      await this.mdItemRepository.create(mdItemInput)
    ).save();
    console.log("New item created", newItem);
    return newItem;
  }

  @Mutation(() => Int)
  async updateItem(
    @Arg("newItem") mdItemInput: MdItemInput,
    @Arg("itemId") itemId: string
  ): Promise<number | null> {
    const result = await this.mdItemRepository.update(mdItemInput, {
      where: { id: itemId },
    });
    console.log("Result ===>", result);
    return result[0];
  }
}
