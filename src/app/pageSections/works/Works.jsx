import WorkCard from '../workCard/WorkCard';
import { dataWorks } from './dataWorks';
import styles from './works.module.scss';

const Works = () => {
  const dataItems = dataWorks;

  return (
    <section className={styles.works}>
      <div className={styles.container}>
        <div className={styles.headline}>
          <h2 className={styles.title}>Latest Works</h2>
          <p className={styles.desc}>Client success stories that showcase how our solutions have helped businesses achieve their goals.</p>
        </div>
        {/* headline */}

        <div className={styles.cards}>
          {dataItems.map((item) => (
            <WorkCard
              key={item.id}
              order={item.id}
              date={item.date}
              img={item.image}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
        {/* cards */}
      </div>
      {/* container */}      
    </section>
  )
}
export default Works