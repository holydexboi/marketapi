import { sequelize } from "../../sequelize";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Transaction } from "./transaction";
import { TransactionInput } from "./transactionType";


@Resolver()
export class TransactionResolver {
  private readonly transactionRepository = sequelize.getRepository(Transaction);

  @Query(() => Transaction)
  async getTransaction(@Arg('id') id: string) {
    return await this.transactionRepository.findByPk(id);
  }

  @Query(() => [Transaction])
  async getTransactions() {
    return await this.transactionRepository.findAll();
  }
  @Mutation(() => Transaction)
  async createTransaction(@Arg('transaction') transactionInput: TransactionInput) {
    return (await this.transactionRepository.create(transactionInput)).save()
  }


}