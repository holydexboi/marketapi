import { Sequelize } from "sequelize-typescript";
import { Award } from "./models/award/award";
import { Transaction } from "./models/transaction/transaction";
import { User } from "./models/user/user";
import { UserAward } from "./models/userAward/userAward";

export const sequelize = new Sequelize({
  repositoryMode: true,
  database: "md-db",
  dialect: "mysql",
  username: "root",
  password: "babatunde2",
  storage: "localhost",
  models: [User, Transaction, Award, UserAward],
});
