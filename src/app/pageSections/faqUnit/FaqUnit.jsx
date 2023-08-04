import { FaChevronCircleDown } from "react-icons/fa";

import styles from './faqUnit.module.scss';

const FaqUnit = ({question, answer}) => {
  return (
    <div className={styles.unit}>
    <div className={styles.headline}>
      <p className={styles.question}>{ question }</p>
      <div className={styles.wrapper}>
        <FaChevronCircleDown className={styles.icon} />
      </div>
    </div>
    {/* headline */}

    <div className={styles.desc}>
      <hr />
      <p className={styles.answer}>{ answer }</p>
    </div>
  </div>
  )
}
export default FaqUnit