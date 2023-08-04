import Image from 'next/image';

import styles from './productCard.module.scss';

const ProductCard = ({ index, title, desc, img }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`
        ${styles.contents}
        ${isEven ? styles.even : styles.odd}`
      }
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
      {/* imageContent */}

      <div className={styles.textContent}>
        <div className={styles.text}>
          <h5 className={styles.title}>{title}</h5>
          <p className={styles.desc}>{desc}</p>
        </div>

        <button className={styles.btn}>
          Download Datasheet
        </button>
      </div>   
      {/* textContent */}
    </div>
  )
}
export default ProductCard