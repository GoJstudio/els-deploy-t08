import { ContactForm } from '@/components/utilsComponents';

import WhereToFind from './whereToFind/WhereToFind';

import styles from './contactSection.module.scss';

const ContactSection = ({address, phone, email}) => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.comp}>
            <ContactForm>
              <h2 className={styles.title}>Send us a message</h2>
            </ContactForm>
          </div>

          <WhereToFind
            address={address}
            phone={phone}
            email={email}
          />
        </div>
      </div>      
    </section>
  )
}
export default ContactSection