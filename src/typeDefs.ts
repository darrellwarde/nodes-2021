import { gql } from "apollo-server";

const typeDefs = gql`
  type Movie {
    title: String!
  }

  type User {
    name: String!
  }
`;

export default typeDefs;
