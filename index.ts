
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm"
import { UserResolver } from "./src/resolvers/UserResolver";
const express = require('express');
const app = express();

(async () => {
    await createConnection();
    
    const apolloServer = new ApolloServer(
        {context: ({ req, res}) => ({ req, res}),
        schema: await buildSchema({
            resolvers: [UserResolver]
        })}
    )
    
    apolloServer.applyMiddleware({ app })

    app.listen(3001, () => { 
        console.log('A backend na porta 3001')
    });
})()
