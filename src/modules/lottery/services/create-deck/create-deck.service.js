import createApolloClient from "libs/apollo-client";

import { createDeck } from "./mutation.graphql";

export default async function createDeckService({ name, images }) {
  const apolloClient = createApolloClient();

  const variables = {
    input: {
      name,
    },
    images,
  };

  const response = await apolloClient.mutate({
    mutation: createDeck,
    variables,
    context: {
      headers: {
        "Apollo-Require-Preflight": true,
      },
    },
  });

  return response.data.createDeck;
}
