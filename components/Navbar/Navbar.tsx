import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h1}>Y_K.</h1>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link href={'/'}>Blog</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/projects'}>Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
