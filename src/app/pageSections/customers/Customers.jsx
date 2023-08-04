import Image from 'next/image';

// import img from '/images/customer-logos.png';
import styles from './customers.module.scss';

const Customers = () => {
  return (
    <section className={styles.customers}>
      <div className={styles.container}>
          <div className={styles.headline}>
            <h2 className={styles.title}>Trusted by industry leaders</h2>
            <p className={styles.desc}>We are proud to partner with these giants and help them achieve their energy and sustainability goals.</p>
          </div>
          {/* headline */}

          <div className={styles.imageContent}>
            <Image
              src='/images/customer-logos-05.png'
              alt='ELS valuable customer logos'
              fill
              sizes='100vw'
              className={styles.img}
            />
          </div>
      </div>
      {/* container */}      
    </section>
  )
}
export default Customers