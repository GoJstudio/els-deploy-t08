import Image from 'next/image';

import styles from './welcome.module.scss';

const Welcome = ({title, desc, imgSrc}) => {
  return (
    <section className={styles.welcome}>
      <div className={styles.container}>

        <div className={styles.textContent}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{desc}</p>
        </div>   
        {/* textContent */}

        <div className={styles.imageContent}>
          <Image
            src={imgSrc}
            alt='modular ups AGIL + SBP'
            fill
            sizes='100vw'
            className={styles.img}
          />
        </div>
        {/* imageContent */}
        
      </div>
      {/* container */}      
    </section>
  )
}
export default Welcome