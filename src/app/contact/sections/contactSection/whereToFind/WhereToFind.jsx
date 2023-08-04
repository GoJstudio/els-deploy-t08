import Sns from './sns/Sns';
import styles from './whereToFind.module.scss';

const WhereToFind = ({address, phone, email}) => {
  return (
    <div className={styles.whereTo}>
      <h5>Where to find us</h5>

      <div className={styles.address}>
        <p className={styles.subTitle}>Address</p>
        <p className={styles.desc}>{address}</p>
      </div>

      <div className={styles.phone}>
        <p className={styles.subTitle}>Phone</p>
        <p className={styles.desc}>{phone}</p>
      </div>

      <div className={styles.email}>
        <p className={styles.subTitle}>Email</p>
        <p className={styles.desc}>{email}</p>
      </div>

      <Sns />
    </div>
  )
}
export default WhereToFind