import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer } from "apollo-server";
import neo4j from "neo4j-driver";

import typeDefs from "./typeDefs";

const driver = neo4j.driver(
  process.env.NEO4J_URL,
  neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
);

const neo4jGraphQL = new Neo4jGraphQL({ typeDefs, driver });

const server = new ApolloServer({
  schema: neo4jGraphQL.schema,
});

void server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
