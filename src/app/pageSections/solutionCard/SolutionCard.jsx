import styles from './solutionCard.module.scss';

const SolutionCard = ({title, desc, children}) => {
  return (
    <div className={styles.card}>
      <div className={styles.contents}>
        { children }
        
        <div className={styles.text}>
          <h4 className={styles.title}>{ title }</h4>
          <p className={styles.desc}>{ desc }</p>
        </div>
      </div>
      {/* contents */}
    </div>
  )
}
export default SolutionCard