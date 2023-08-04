
import { Hero, Products, Solutions, Services, Works, FAQs, Email, Customers } from './pageSections';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Products />
      <Solutions />
      <Services />
      <Works />
      <Customers />
      <FAQs />
      <Email />
    </main>
  )
}
