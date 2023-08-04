import SolutionCard from '../solutionCard/SolutionCard';
import { dataSolutions } from './dataSolutions';
import styles from './solutions.module.scss';

const Solutions = () => {
  const dataItems = dataSolutions;

  return (
    <section className={styles.solutions}>
      <div className={styles.container}>
        <div className={styles.headline}>
          <h2 className={styles.title}>Our Solutions</h2>
          <p className={styles.desc}>A comprehensive suite of solutions to help you reduce your environmental footprint and achieve your sustainability goals.</p>
        </div>
        {/* headline */}

        <div className={styles.cards}>
          {dataItems.map((item) => (
            <SolutionCard
              key={item.id}
              title={item.title}
              desc={item.desc}
            >
              <item.icon className={styles.icon} />
            </SolutionCard>
          ))}
        </div>
        {/* cards */}
      </div>
      {/* container */}      
    </section>
  )
}
export default Solutions