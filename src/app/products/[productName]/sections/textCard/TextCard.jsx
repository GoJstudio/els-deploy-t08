import styles from './textCard.module.scss';

const TextCard = ({application, feature}) => {
  return (
    <div className={styles.card}>      
      <div className={styles.textLeft}>
        <h5 className={styles.title}>Applications</h5>
        <p className={styles.desc}>{ application }</p>
      </div>

      <div className={styles.textRight}>
        <h5 className={styles.title}>Main Features</h5>
        <p className={styles.desc}>{ feature }</p>
      </div>
    </div>
  )
}
export default TextCard