import { GRAPHQL_URL } from "./config";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: createUploadLink({
      uri: GRAPHQL_URL,
    }),
  });
};

export default createApolloClient;
