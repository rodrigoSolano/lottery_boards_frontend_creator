import createApolloClient from "libs/apollo-client";

import { decks } from "./query.graphql";

export default async function listDecksService({ options = "" }) {
  const apolloClient = createApolloClient();

  const variables = {
    options,
  };

  const response = await apolloClient.query({
    query: decks,
    variables,
  });

  return response.data.listDecks.data;
}
