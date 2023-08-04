import Link from 'next/link';

import styles from './logo.module.scss';

const Logo = ({ fweight, color, slogan }) => {
  return (
    <div className={styles.logo}>
      <Link
        href="/"
        className={`
          ${styles.link}
          ${color === 'white' ? styles.white : ''}
        `}
      >
        <h2
          className={`
            ${styles.name}
            ${fweight === 'light' ? styles.normal : ''}
          `}
        >ELS</h2>
        { slogan &&
          <h6 className={styles.slogan}>Let there be light</h6>
        }
        <div className={styles.initial}>
          <p><strong>E</strong>nergy</p>
          <p><strong>L</strong>ighting</p>
          <p><strong>S</strong>ervice</p>
        </div>
      </Link>
    </div>
  );
}
export default Logo