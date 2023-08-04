import Image from 'next/image';

import styles from './partners.module.scss';

const Partners = ({title, logos, desc}) => {
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>

        <LogosDefault logos={logos} />
        <LogosLg logos={logos} />
        <LogosSm logos={logos} />
        
        <p className={styles.desc}>{desc}</p>
      </div>
      {/* container */}      
    </section>
  )
}
export default Partners

const LogosDefault = ({logos}) => {
  return (
    <div className={styles.logosDefault}>
      {logos.map((logo) => (
        <Image
          key={logo.id}
          src={logo.image}
          alt={logo.alt}
          responsive
          width={logo.width}
          height={logo.height}
          className={styles.img}
        />
      ))}
    </div>
  )
}

const LogosLg = ({logos}) => {
  const lastLogo = logos[logos.length - 1];

  return (
    <div className={styles.logosLg}>
      <div className={styles.left}>
        <div className={styles.upper}>
          {logos.slice(0, 3).map((logo) => (
            <Image
              key={logo.id}
              src={logo.image}
              alt={logo.alt}
              responsive
              width={logo.width}
              height={logo.height}
              className={styles.img}
            />
          ))}
        </div>
        {/* upper */}

        <div className={styles.lower}>
          {logos.slice(3, 5).map((logo) => (
            <Image
              key={logo.id}
              src={logo.image}
              alt={logo.alt}
              responsive
              width={logo.width}
              height={logo.height}
              className={styles.img}
            />
          ))}
        </div>
        {/* lower */}
      </div>
      {/* left */}
      
      <Image
        src={lastLogo.image}
        alt={lastLogo.alt}
        responsive
        width={lastLogo.width}
        height={lastLogo.height}
        className={styles.img}
      />
    </div>
  )
}

const LogosSm = ({logos}) => {
  const lastLogo = logos[logos.length - 1];

  const temp = logos[1];
  logos[1]=logos[2];
  logos[2]=logos[3]
  logos[3]=temp;

  return (
    <div className={styles.logosSm}>
      <div className={styles.upper}>
        <div className={styles.left}>
          {logos.slice(0, 2).map((logo) => (
            <Image
              key={logo.id}
              src={logo.image}
              alt={logo.alt}
              responsive
              width={logo.width}
              height={logo.height}
              className={styles.img}
            />
          ))}
        </div>

        <Image
          src={lastLogo.image}
          alt={lastLogo.alt}
          responsive
          width={lastLogo.width}
          height={lastLogo.height}
          className={styles.img}
        />
      </div>
      {/* upper */}

      {logos.slice(2, 5).map((logo) => (
        <Image
          key={logo.id}
          src={logo.image}
          alt={logo.alt}
          responsive
          width={logo.width}
          height={logo.height}
          className={styles.img}
        />
      ))}
    </div>
  )
}