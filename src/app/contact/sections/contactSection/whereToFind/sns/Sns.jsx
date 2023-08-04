import Link from 'next/link';

import { FaWhatsappSquare, FaTwitter, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

import styles from './sns.module.scss';

const Sns = () => {
  return (
    <div className={styles.sns}>
      <Link href="/aaa" className={styles.link}>
        <FaWhatsappSquare className={styles.icon} />
      </Link>
      <Link href="/bbb" className={styles.link}>
        <FaTwitter className={styles.icon} />
      </Link>
      <Link href="/ccc" className={styles.link}>
        <FaLinkedin className={styles.icon} />
      </Link>
      <Link href="/ddd" className={styles.link}>
        <FaFacebookSquare className={styles.icon} />
      </Link>
    </div>
  )
}

export default Sns