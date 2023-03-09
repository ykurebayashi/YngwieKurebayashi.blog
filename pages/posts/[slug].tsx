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
  const { posts } = await graphcms.request<any>(SLUGLIST);
  return {
    paths: posts.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const slug = params.slug;
  const data = await graphcms.request<Post>(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}

type Author = {
  name: string;
  avatar: {
    id: string;
    url: string;
  };
};

type CoverPhoto = {
  url: string;
};

type Content = {
  html: string;
};

type Post = {
  post: {
    author: Author;
    category: string;
    content: Content;
    coverPhoto: CoverPhoto;
    datePublished: string;
    excerpt: string;
    id: string;
    slug: string;
    title: string;
  };
};

type AllPosts = {
  posts: Post[];
};

export default function BlogPost({ post }: Post) {
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
