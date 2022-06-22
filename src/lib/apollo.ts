import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4plgxix1u9m01xx7c2xg6yo/master',
    cache: new InMemoryCache()
})