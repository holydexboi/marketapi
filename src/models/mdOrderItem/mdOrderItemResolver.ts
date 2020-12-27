import { sequelize } from "../../sequelize";
import { Arg, Mutation, Resolver } from "type-graphql";
import { MdOrderItem } from "./mdOrderItem";
import { MdOrderItemType } from "./mdOrderItemType";

@Resolver()
export class MdOrderItemResolver {
  private readonly mdOrderItemRepository = sequelize.getRepository(MdOrderItem);

  @Mutation(() => MdOrderItem)
  async addItemToMdOrder(
    @Arg("mdOrderItem") mdOrderItemInput: MdOrderItemType
  ) {
    const mdOrderItem = (
      await this.mdOrderItemRepository.create(mdOrderItemInput)
    ).save();
    return mdOrderItem;
  }
}
