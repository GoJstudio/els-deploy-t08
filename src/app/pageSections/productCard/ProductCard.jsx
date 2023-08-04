import Image from 'next/image';

import styles from './productCard.module.scss';

const ProductCard = ({ title, display, desc, img1, img2 }) => {
  return (
    <div className={styles.contents}>
      <div className={styles.imageContent}>
        <Image
          src={img1}
          alt='modular ups AGIL + SBP'
          fill
          sizes='100vw'
          className={styles.img1}
        />
        <Image
          src={img2}
          alt='modular ups AGIL + SBP'
          fill
          sizes='100vw'
          className={styles.img2}
        />
      </div>
      {/* imageContent */}

      <div className={styles.textContent}>
        <div className={styles.text}>
          <h5 className={styles.title}>{title}</h5>
          <h2 className={styles.display}>{display}</h2>
          <p className={styles.desc}>{desc}</p>
        </div>

        <button className={styles.btn}>
          Learn more
        </button>
      </div>   
      {/* textContent */}
    </div>
  )
}
export default ProductCard