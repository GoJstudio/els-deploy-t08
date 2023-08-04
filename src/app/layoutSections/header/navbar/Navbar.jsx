'use client';

import Link from 'next/link';
import { useState } from 'react';

import { dataHeader } from '../dataHeader';
import styles from './navbar.module.scss';
import SubMenu from './subMenu/SubMenu';

const Navbar = () => {
  const navItems = dataHeader;

  const [showSubMenu, setShowSubMenu] = useState(true);

  const handleMouseEnter = (hasSubMenu) => {
    if (hasSubMenu) {
      setShowSubMenu(true);
    }
  };

  const handleMouseLeave = () => {
    setShowSubMenu(true);
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlist}>
        {navItems.map((navItem) => (
          <li
            className={styles.navmenu}
            key={navItem.id}
            onMouseEnter={
              () => handleMouseEnter(navItem.subMenu && navItem.subMenu.length > 0)
            }
            onMouseLeave={handleMouseLeave}
          >
            <Link href={navItem.url}>
              {navItem.name}
            </Link>
              {(showSubMenu && navItem.subMenu.length > 0) && (
                <div className={styles.subCover}>
                  <SubMenu
                    subMenuItems={navItem.subMenu}
                  />
                </div>
              )}
          </li>
        ))}
      </ul>
    </nav>
    )
}
export default Navbar