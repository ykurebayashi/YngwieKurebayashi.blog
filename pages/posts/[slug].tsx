/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar/Navbar";
import { GraphQLClient, gql } from "graphql-request";
import styles from "../../styles/Slug.module.css";

const graphcms = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clf03xq6b1pn101ug1qpf36pj/master"
);

const QUERY = gql`
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

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}

export default function BlogPost({ post }) {
  return (
    <div className={styles.mainBody}>
      <Navbar />
      <main className={styles.blog}>
        <img
          className={styles.cover}
          src={post.coverPhoto.url}
          alt={post.title}
        />

        <div className={styles.title}>
          <h1>{post.title}</h1>
          <div className={styles.autorInfo}>
            <img src={post.author.avatar.url} className={styles.authorCover} />
            <div className={styles.postInfo}>
              <p>By: {post.author.name}</p>
              <p>Published: {post.datePublished}</p>
              <p>Category: {post.category}</p>
            </div>
          </div>
        </div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
      </main>
    </div>
  );
}
