import { GraphQLServer } from 'graphql-yoga';
import mariadb from 'mariadb';
import {getFoodRequest, insertFoodRequest} from './request_food.js';

const pool = mariadb.createPool({
    host: 'localhost', port:'3306',
    user: 'user', password: 'user1234',
    connectionLimit: 5
});

const typeDefs = `
  type FoodRequest {
    date: Date,
    text: String
  }

  type Query {
    request_food(year: Int, month: Int): [FoodRequest]
  }

  type Mutation {
    request_food(date: Date, text: String): Boolean!
  }

  scalar Date
`

const resolvers = {
  Query: {
    request_food: async(_, { year, month }) => {
      return await getFoodRequest(pool, year, month);
    },
  },
  Mutation: {
    request_food: async(_, {date, text}) => {
      return await insertFoodRequest(pool, date, text)
    }
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))