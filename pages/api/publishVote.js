import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

export default async function publishVote(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    },
  });

  const publishVoteQuery = gql`
    mutation PublishVote {
      publishManyVotes(to: PUBLISHED) {
        count
      }
    }
  `;

  try {
    const result = await graphQLClient.request(
      //   createVoteQuery,
      publishVoteQuery,
      req.body
    );
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}
