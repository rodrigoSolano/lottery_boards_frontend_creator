import createApolloClient from "libs/apollo-client";

import lotteryAdapter from "modules/lottery/adapters/lottery.adapter";

import { findLotteryById } from "./query.graphql";

export default async function findLotteryByIdService({ id }) {
  const apolloClient = createApolloClient();

  const variables = {
    id,
  };

  const response = await apolloClient.query({
    query: findLotteryById,
    variables,
  });

  const adaptedResponse = lotteryAdapter(response.data.findLotteryById);

  return adaptedResponse;
}
