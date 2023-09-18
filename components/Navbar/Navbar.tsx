import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

export type NavBarProps = {
  url: string;
  name: string;
};

export default function Navbar({ pages }: { pages: NavBarProps[] }) {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h1}>Y_K.</h1>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {pages.map((page, index) => {
            return (
              <li key={`list-${index}`}>
                <Link href={page.url}>{page.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
