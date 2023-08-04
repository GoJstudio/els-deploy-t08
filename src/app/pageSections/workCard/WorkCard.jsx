import Image from 'next/image';

import styles from './workCard.module.scss';

const WorkCard = ({order, date, img, title, desc}) => {
  return (
    <div className={`${styles.card} ${order === 1 ? styles.blue : ''}`}>
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
        {/* <div className={`${styles.textContent} ${order === 1 ? styles.blue : ''}`}> */}
        <p className={styles.date}>{ date }</p>
          
          <div className={styles.text}>
            <h6 className={styles.title}>{ title }</h6>
            <p className={styles.desc}>{ desc }</p>
          </div>

        </div>
        {/* textContent */}
      </div>
      {/* contents */}
    </div>
  )
}
export default WorkCard