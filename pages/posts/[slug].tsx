/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar/Navbar";
import styles from "../../styles/Slug.module.css";
import {
  GetStaticPropsArgs,
  GraphCMSResponse,
  SinglePost,
  SlugListResponse,
} from "@/utils/types/types";
import { graphcms } from "@/utils/client/graphqlClient";
import { SINGLE_POST_QUERY, SLUGLIST_QUERY } from "@/utils/queries/postsQuery";
import { pages } from "@/utils/pages";

export async function getStaticPaths() {
  const { posts } = await graphcms.request<SlugListResponse>(SLUGLIST_QUERY);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsArgs) {
  const slug = params.slug;
  const data = await graphcms.request<GraphCMSResponse>(SINGLE_POST_QUERY, {
    slug,
  });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}

export default function BlogPost({ post }: { post: SinglePost }) {
  return (
    <div className={styles.mainBody}>
      <Navbar pages={pages} />
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
