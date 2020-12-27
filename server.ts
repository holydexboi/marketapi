import "reflect-metadata";
import {ApolloServer} from "apollo-server-express";
import * as Express from "express";
import { buildSchema} from "type-graphql";
import { TransactionResolver } from './src/models/transaction/transactionResolver'
import { UserResolver } from './src/models/user/userResolver'
import { AwardResolver } from './src/models/award/awardResolver'
import { UserAwardResolver } from './src/models/userAward/userAwardResolver'
import { sequelize } from "./src/sequelize";



const main = async () => {
    
    sequelize.sync({ alter: true })
    // sequelize.drop()

    const schema = await buildSchema({
        resolvers: [
            UserResolver, 
            TransactionResolver,
            AwardResolver,
            UserAwardResolver
        ],
      });

    const apolloServer = new ApolloServer({
        schema
    })

    const app = Express();

    apolloServer.applyMiddleware({app})

    app.listen(5000, ()=>{
        console.log("Server started at http://localhost:5000/graphql")
    })
}

main();