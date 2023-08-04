import { FaChevronRight } from "react-icons/fa";

import styles from './downLink.module.scss';

const DownLink = ({title}) => {
  return (
    <section className={styles.downLink}>
      <div className={styles.container}>
        <h5 className={styles.title}>{title}</h5>

        <button className={styles.btn}>
          <p>Downloadable Resources</p>
        </button>
      </div>
      {/* container */}
    </section>
  )
}
export default DownLink