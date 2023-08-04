import Image from 'next/image';

import styles from './team.module.scss';

const Team = (props) => {
  const {
    textColor,
    bgColor,
    headline,
    title,
    order,
    subtitle,
    desc,
    imgSrc
  } = props;

  return (
    <section
      className={styles.team}
      style={{color: textColor, backgroundColor: bgColor}}
    >
      <div className={styles.container}>
        {headline &&
          <h2 className={styles.title}>
            {title}
          </h2>
        }

        <div
          className={`
            ${styles.contents}
            ${order === 2 ? styles.reverse : ''}
          `}
        >
          <div className={styles.imageContent}>
            <Image
              src={imgSrc}
              alt='ELS power design & sourcing team'
              fill
              sizes='100vw'
              className={styles.img}
            />
          </div>
          
          <div className={styles.textContent}>
            <h4 className={styles.subtitle}>{ subtitle }</h4>
            <p className={styles.desc}>{ desc }</p>
        </div>
          {/* textContent */}
        </div>
        {/* contents */}

      </div>
      {/* container */}      
    </section>
  )
}
export default Team