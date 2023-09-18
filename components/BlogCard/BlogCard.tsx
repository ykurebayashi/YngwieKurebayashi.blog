/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../../styles/BlogCard.module.css";
import { ReactElement } from "react";
import { BlogCardProps } from "./types";

export default function BlogCard({
  title,
  author,
  authorPic,
  coverPhoto,
  datePublished,
  slug,
  category,
  excerpt,
}: BlogCardProps): ReactElement {
  return (
    <Link className={styles.cardLink} href={"/posts/" + slug}>
      <div className={styles.card}>
        <div className={styles.mainTitle}>
          <img src={coverPhoto} alt={slug} className={styles.cover} />
          <h1 className={styles.title}>{title}</h1>
        </div>

        <div className={styles.postInfo}>
          <div className={styles.postMetaData}>
            <div className={styles.authorInfo}>
              <img src={authorPic} alt={author} />
              <p>{author}</p>
            </div>
            <p>{datePublished}</p>
          </div>

          <p>{excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
