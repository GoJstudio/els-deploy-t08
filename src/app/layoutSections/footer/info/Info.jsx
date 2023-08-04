import Link from 'next/link';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import styles from './info.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <p className={styles.title}>Company Info</p>
      <div className={styles.item}>
        <FaMapMarkerAlt className={styles.icon} />
        <p>Quarry Bay, Hong Kong</p>
      </div>
      <div className={styles.item}>
        <FaEnvelope className={styles.icon} />
        <p>davidsiu@lettherebelight.cn</p>
      </div>
      <div className={styles.item}>
        <FaPhoneAlt className={styles.icon} />
        <p>+852 2850 8818</p>
      </div>
    </div>
  )
}
export default Contact