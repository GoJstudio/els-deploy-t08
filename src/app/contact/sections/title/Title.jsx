import { PageTitle } from '@/components/layoutComponents';
import styles from './title.module.scss';

const Title = ({title, alt, imgSrc}) => {
  return (
    <section className={styles.title}>
      <PageTitle
        alt={alt}
        imgSrc={imgSrc}
        bkColor="rgba(29,32,36,0.6)"
      >
        <div className={styles.container}>
          <p className={styles.headline}>
            {title}
          </p>
        </div>
      </PageTitle>
    </section>
  )
}
export default Title