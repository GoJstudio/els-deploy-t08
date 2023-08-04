import styles from './contactLink.module.scss';

const ContactLink = ({title}) => {
  return (
    <section className={styles.contactLink}>
      <div className={styles.container}>
        <h5 className={styles.title}>{title}</h5>

        <button className={styles.btn}>
          <p>Contact Us</p>
        </button>
      </div>
      {/* container */}
    </section>
  )
}
export default ContactLink