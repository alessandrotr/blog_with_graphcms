import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            id
            comments {
              id
            }
            featuredImage {
              url
            }
            categories {
              name
              slug
              color {
                hex
              }
            }
            votes {
              id
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
        color {
          hex
        }
        featuredImage {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        id
        comments {
          id
        }
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
          color {
            hex
          }
          featuredImage {
            url
          }
        }
        votes {
          id
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 4
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        comments {
          id
        }
        categories {
          slug
          name
          color {
            hex
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!, $slug: String!) {
      next: posts(
        first: 1
        orderBy: createdAt_ASC
        where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        excerpt
        comments {
          id
        }
        categories {
          slug
          name
          color {
            hex
          }
        }
      }
      previous: posts(
        first: 1
        orderBy: createdAt_DESC
        where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        excerpt
        comments {
          id
        }
        categories {
          slug
          name
          color {
            hex
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, createdAt });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            comments {
              id
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
              color {
                hex
              }
              featuredImage {
                url
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        comments {
          id
        }
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        excerpt
        slug
        createdAt
        categories {
          name
          slug
          color {
            hex
          }
          featuredImage {
            url
          }
        }
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getPrincipalPost = async () => {
  const query = gql`
    query GetPrincipalPost() {
      posts(where: {principalPost: true}) {
        comments {
          id
        }
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        excerpt
        slug
        createdAt
        categories {
          name
          slug
          color {
            hex
          }
          featuredImage {
            url
          }
        }
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const submitComment = async (obj) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const submitVote = async (obj) => {
  const result = await fetch("/api/upvote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const publishVote = async (obj) => {
  const result = await fetch("/api/publishVote", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getVotes = async (slug) => {
  const query = gql`
    query GetVotes($slug: String!) {
      votes(where: { post: { slug: $slug } }) {
        id
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.votes;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 4
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        comments {
          id
        }
        categories {
          name
          slug
          color {
            hex
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};
