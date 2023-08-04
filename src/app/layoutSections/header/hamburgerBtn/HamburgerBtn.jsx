'use client';

import { useState } from 'react';

import { dataHeader } from '../dataHeader';

import MenuItem from './menuItem/MenuItem';
import styles from './hamburgerBtn.module.scss';


const HamburgerBtn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  return (
    <div
      className={styles.hamburgerBtn}
      onClick={handleMenuToggle}
    >
      <div
        className={
          isMenuOpen ? styles.times :
          styles.hamburger
        }
      >
        {isMenuOpen && (
          <div className={styles.menu}>
            <ul className={styles.menulist}>
              {dataHeader.map((headerItem) => (
                <div
                  className={styles.menuCover}
                  key={headerItem.id}
                >
                  <MenuItem headerItem={headerItem} handleMenuToggle={handleMenuToggle} />
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
export default HamburgerBtn