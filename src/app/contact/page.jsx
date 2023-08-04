import { dataContact } from './dataContact';

import { ContactSection, DownLink, Map, Title } from './sections';

import styles from './contact.module.scss';

export const metadata = {
  title: 'ELS Power Contact page',
  description: 'This shows you how to contact to ELS Power',
}


const Contact = () => {
  const dataItems = dataContact;

  return (
    <div className={styles.contact}>
      <Title
        title={dataItems.sectionTitle.title}
        alt={dataItems.sectionTitle.alt}
        imgSrc={dataItems.sectionTitle.image}
      />
      
      <Map />
        
      <ContactSection
        address={dataItems.where.address}
        phone={dataItems.where.phone}
        email={dataItems.where.email}
      />

      <DownLink
        title={dataItems.downLink.title}
      />
    </div>
  )
}
export default Contact