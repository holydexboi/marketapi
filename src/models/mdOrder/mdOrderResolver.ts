import { sequelize } from "../../sequelize";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../mdUser/mdUser";
import { MdOrder } from "./mdOrder";
import { MdItem } from "../mdItem/mdItem";
import { MdOrderInput } from "./mdOrderType";

@Resolver()
export class MdOrderResolver {
  private readonly mdOrderRepository = sequelize.getRepository(MdOrder);
  private readonly mdUserRepository = sequelize.getRepository(User);
  private readonly mdItemRepository = sequelize.getRepository(MdItem);

  @Query(() => MdOrder)
  async getMdOrder(@Arg("id") id: number): Promise<MdOrder | null> {
    return await this.mdOrderRepository.findByPk(id, {
      include: [this.mdUserRepository, this.mdItemRepository],
    });
  }

  @Query(() => [MdOrder])
  async getMdOrders(): Promise<MdOrder[] | null> {
    return await this.mdOrderRepository.findAll({
      include: [this.mdUserRepository, this.mdItemRepository],
    });
  }

  @Mutation(() => MdOrder)
  async createMdOrder(
    @Arg("order") mdOrderInput: MdOrderInput
  ): Promise<MdOrder | null> {
    const newMdOrder = await (
      await this.mdOrderRepository.create(mdOrderInput)
    ).save();
    console.log("New order created", newMdOrder);
    return newMdOrder;
  }

  @Mutation(() => Int)
  async updateMdOrder(
    @Arg("newOrder") mdOrderInput: MdOrderInput,
    @Arg("orderId") orderId: string
  ): Promise<number | null> {
    const result = await this.mdOrderRepository.update(mdOrderInput, {
      where: { id: orderId },
    });
    console.log("Result ===>", result);
    return result[0];
  }
}
