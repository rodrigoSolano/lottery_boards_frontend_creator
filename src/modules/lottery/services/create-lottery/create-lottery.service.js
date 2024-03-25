import createApolloClient from "libs/apollo-client";

import { createLottery } from "./mutation.graphql";

export default async function createLotteryService({ numberOfBoards, deckId }) {
  const apolloClient = createApolloClient();

  const variables = {
    input: {
      deckId,
      numberOfBoards: parseInt(numberOfBoards),
    },
  };

  const response = await apolloClient.mutate({
    mutation: createLottery,
    variables,
  });

  return response.data.createLottery.id;
}
