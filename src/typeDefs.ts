import { gql } from "apollo-server";

const typeDefs = gql`
  type Movie {
    title: String!
    owners: [User!]!
      @relationship(type: "OWNS", direction: IN, properties: "Owns")
    actors: [Actor!]! @relationship(type: "ACTED_IN", direction: IN)
  }

  type User {
    name: String!
    movies: [Movie!]!
      @relationship(type: "OWNS", direction: OUT, properties: "Owns")
    moviesCount: Int!
      @cypher(statement: "MATCH (this)-[:OWNS]->(m:Movie) RETURN count(m)")
  }

  type Actor {
    firstName: String!
    lastName: String!
    movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
  }

  interface Owns {
    format: String
  }
`;

export default typeDefs;
