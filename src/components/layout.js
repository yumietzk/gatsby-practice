import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={styles.container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link to="/" className={styles.navLinkText}>
              Home
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/about" className={styles.navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={styles.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
