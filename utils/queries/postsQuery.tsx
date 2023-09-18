import { gql } from "graphql-request";

export const ALL_POSTS_QUERY = gql`
  query {
    posts {
      title
      slug
      coverPhoto {
        url
      }
      content {
        html
      }
      datePublished
      excerpt
      category
      author {
        name
        avatar {
          id
          url
        }
      }
      id
    }
  }
`;

export const SINGLE_POST_QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      title
      slug
      coverPhoto {
        url
      }
      content {
        html
      }
      datePublished
      excerpt
      category
      author {
        name
        avatar {
          id
          url
        }
      }
      id
    }
  }
`;

export const SLUGLIST_QUERY = gql`
  {
    posts {
      slug
    }
  }
`;
