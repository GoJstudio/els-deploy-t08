import Image from 'next/image';
import styles from './pageTitle.module.scss';

const PageTitle = ({alt, imgSrc, bkColor, children}) => {
  return (
    <div className={styles.title}>
      <Image
        alt={alt}
        src={imgSrc}
        quality={100}
        fill
        style={{objectFit: "cover"}}
      />
      <div
        className={styles.overlay}
        style={{backgroundColor: bkColor}}
      />

      <div className={styles.textContent}>
        {children}
      </div>
    </div>
  )
}

export default PageTitle