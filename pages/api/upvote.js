import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

export default async function upvote(req, res) {
  // console.log({ graphcmsToken });
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    },
  });

  const createVoteQuery = gql`
    mutation CreateVote($slug: String!) {
      createVoteResult: createVote(
        data: { post: { connect: { slug: $slug } } }
      ) {
        id
      }
    }
  `;

  // publishVote(where: { id: "cl2cj7yn8d4f20bun3txfvlgy" }, to: PUBLISHED) {
  //   id
  // }

  // const publishVoteQuery = gql`
  //   mutation PublishVote($id: ID!) {
  //     publishVote(where: { id: $id }, to: PUBLISHED) {
  //       stage
  //     }
  //   }
  // `;

  try {
    const result = await graphQLClient.request(
      createVoteQuery,
      // publishVoteQuery,
      req.body
    );
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}
