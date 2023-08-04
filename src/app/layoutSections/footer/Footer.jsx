import { FaChevronRight } from "react-icons/fa";

import Logo from '../logo/Logo';
import Sns from './sns/Sns';
import Contact from './info/Info';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.upper}>
          <Logo
            color='white'
            fweight='light'
            slogan={true}
          />

          <div className={styles.center}>
            <button className={styles.btn}>
              <p>CONTACT US</p>
              <FaChevronRight />
            </button>
            <Sns />
          </div>
          
          <Contact />
        </div>
        {/* upper */}

        <div className={styles.lower}>
          <p className={styles.copyright}>&copy;2023 ELS Ltd. All rights reserved.</p>
        </div>
        {/* lower */}
      </div>
      {/* container */}
    </footer>
  )
}
export default Footer