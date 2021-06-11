# Neo4j and GraphQL: The Past, The Present and The Future

Demo material for the NODES 2021 talk, "Neo4j and GraphQL: The Past, The Present and The Future".

The slides used in the presentation are available at [https://bit.ly/352dTWe](https://bit.ly/352dTWe)

In the `stages` directory, you can see the steps of building up the type definitions, and the GraphQL which was used to build and query the demo graph.

## Installation

In the root of the repository, simply run:

```bash
yarn install
```

## Running

You will need to add the connection details for a Neo4j database instance into the `.env` file in the repository.

Once you have done that, run the following to start a server:

```bash
yarn start
```

You can then access GraphQL Playground at the URL output in the console.
