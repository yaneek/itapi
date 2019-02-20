import 'reflect-metadata';
import { ApolloServer, gql } from 'apollo-server-express';
import express = require('express');
import faker = require('faker');
// import _ = require('lodash');
// import { DateTime } from 'luxon';

const PORT = process.env.PORT || 3000;

/**
  {
    "text": "Paryż",
    "type": "object",
    "additional": {
        "url": "/city-break/francja/paryz,PARCITY.html",
        "image": "https://i.content4travel.com/cms/img/u//hotel/m/parcity_0.jpg?version=180501-12",
        "packageType": "city_break",
        "packageCode": "PARCITY",
        "canonicalDestinationTitle": "Francja, Paryż",
        "standard": null
    }
  },
 */
async function bootstrap() {
  const typeDefs = gql`
    scalar Date

    type Content {
      id: ID
      language: String
      provider: String
      fullText: String
      mainImage: String
      images: [String]
      movies: [String]
      region: String
      standard: Int
      moreInfoUrl: String
    }

    type AutocompleteItem {
      id: ID
      text: String!
      type: String!
      content: Content!
    }

    type Offer {
      id: ID
      type: String
      price: Float
      content: Content!
    }

    type Query {
      autocomplete(query: String!, language: String!): [AutocompleteItem!]

      offers(query: String, language: String!, dateFrom: Date, dateTo: Date): [Offer!]
    }
  `;

  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {},
  };

  const mocks = {
    String: () => faker.lorem.word(),
    Int: () => faker.random.number(1000),
    ID: () => faker.random.uuid(),
  };

  const server = new ApolloServer({ typeDefs, resolvers, mocks });
  const app = express();
  server.applyMiddleware({ app });

  /* tslint:disable-next-line:no-console */
  app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
}

bootstrap();
