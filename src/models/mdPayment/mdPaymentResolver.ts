import { sequelize } from "../../sequelize";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { MdPayment } from "./mdPayment";
import { User } from "../mdUser/mdUser";
import { MdPaymentInput } from "./mdPaymentType";
import { MdOrder } from "../mdOrder/mdOrder";

@Resolver()
export class MdPaymentResolver {
  private readonly mdPaymentRepository = sequelize.getRepository(MdPayment);
  private readonly mdUserRepository = sequelize.getRepository(User);
  private readonly mdOrderRepository = sequelize.getRepository(MdOrder);

  @Query(() => MdPayment)
  async getPayment(@Arg("id") id: number): Promise<MdPayment | null> {
    return await this.mdPaymentRepository.findByPk(id, {
      include: [this.mdUserRepository, this.mdOrderRepository],
    });
  }

  @Query(() => [MdPayment])
  async getPayments(): Promise<MdPayment[] | null> {
    return await this.mdPaymentRepository.findAll({
      include: [this.mdUserRepository, this.mdOrderRepository],
    });
  }

  @Mutation(() => MdPayment)
  async createPayment(
    @Arg("payment") mdPaymentInput: MdPaymentInput
  ): Promise<MdPayment | null> {
    const newPayment = await (
      await this.mdPaymentRepository.create(mdPaymentInput)
    ).save();
    console.log("New payment created", newPayment);
    return newPayment;
  }

  @Mutation(() => Int)
  async updatePayment(
    @Arg("payment") mdPaymentInput: MdPaymentInput,
    @Arg("paymentId") paymentId: string
  ): Promise<number | null> {
    const result = await this.mdPaymentRepository.update(mdPaymentInput, {
      where: { id: paymentId },
    });
    console.log("Result ===>", result);
    return result[0];
  }
}
