import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";

import styles from './serviceCard.module.scss';

const ServiceCard = ({order, img, title, desc}) => {
  return (
    <div className={styles.card}>
      <div
        className={`
          ${styles.contents}
          ${order === 2 ? styles.reverse : ''}
        `}
      >
        <div className={styles.imageContent}>
          <Image
            src={img}
            alt='modular ups AGIL + SBP'
            fill
            sizes='100vw'
            className={styles.img}
          />
        </div>
        
        <div className={styles.textContent}>
          <div className={styles.text}>
            <h4 className={styles.title}>{ title }</h4>
            <p className={styles.desc}>{ desc }</p>
          </div>

          <div className={styles.btnWrapper}>
            <button className={styles.btn}>
              Read more
              <FaChevronRight className={styles.icon} />
            </button>
          </div>
        </div>
        {/* textContent */}
      </div>
      {/* contents */}
    </div>
  )
}
export default ServiceCard