import Image from 'next/image';

import { FaCircle } from "react-icons/fa";

import { dataHeros } from './dataHero';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContent}>
        <Image
          alt='earth night, nasa from unsplash'
          src={dataHeros[2].image}
          quality={100}
          fill
          cover
          center
          className={styles.heroImg}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.textContents}>
          <h1 className={styles.title}>
            <p>{dataHeros[2].upperTitle}</p>
            {dataHeros[2].lowerTitle}
          </h1>
          <p className={styles.desc}>{dataHeros[2].desc}</p>
        </div>
        {/* textContent */}

        <div className={styles.navigation}>
          <FaCircle
            className={styles.icon}
          />
          <FaCircle
            className={styles.icon}
          />
          <FaCircle
            className={styles.icon}
          />
        </div>
      </div>
      {/* container */}
    </section>
  )
}
export default Hero