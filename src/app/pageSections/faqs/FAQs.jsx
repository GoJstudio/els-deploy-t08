import FaqUnit from '../faqUnit/FaqUnit';
import { dataFaqs } from './dataFaqs';
import styles from './faqs.module.scss';

const FAQs = () => {
  const dataItems = dataFaqs;

  return (
    <section className={styles.faqs}>
      <div className={styles.container}>
        <div className={styles.headline}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <h2 className={styles.short}>FAQs</h2>
          <p className={styles.desc}>We provide clear and concise answers to help customers make informed decisions.</p>
        </div>
        {/* headline */}

        <div className={styles.faqUnits}>
          {dataItems.map((item) => 
            <FaqUnit
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          )}
        </div>
      </div>
    </section>
  )
}
export default FAQs