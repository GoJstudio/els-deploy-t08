import Logo from '../logo/Logo';
import Search from './search/Search';
import Navbar from './navbar/Navbar';
import HamburgerBtn from './hamburgerBtn/HamburgerBtn';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo slogan={false} />

        <div className={styles.menuContents}>
          <Search />
          <Navbar />
        </div>

        <HamburgerBtn />       
      </div>
      {/* Container */}
    </header>
  )
}
export default Header