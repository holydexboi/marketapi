import { sequelize } from "../../sequelize";
import { Arg, Mutation, Resolver } from "type-graphql";
import { MdUserShop } from "./mdUserShop";
import { MdUserShopType } from "./mdUserShopType";

@Resolver()
export class MdUserShopResolver {
  private readonly mdUserShopRepository = sequelize.getRepository(MdUserShop);

  @Mutation(() => MdUserShop)
  async addShopToMdUser(@Arg("mdUserShop") mdUserShopInput: MdUserShopType) {
    const mdUserShop = (
      await this.mdUserShopRepository.create(mdUserShopInput)
    ).save();
    return mdUserShop;
  }
}
