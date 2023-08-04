import Link from 'next/link';

import styles from './menuItem.module.scss';

const MenuItem = ({headerItem, handleMenuToggle}) => {
  return (
    <li
      key={headerItem.id}
      className={styles.menulist}
    >
      {headerItem.subMenu.length > 0 ? (
        <div
          className={styles.menuItem}
          onClick={handleMenuToggle}
        >
          {headerItem.name}
          <ul className={styles.subMenu}>
            {headerItem.subMenu.map((subMenuItem) => (
              <li key={subMenuItem.id}>
                <Link href={subMenuItem.url}>
                  {subMenuItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Link href={headerItem.url}>
          {headerItem.name}
        </Link>
      )}
    </li>
  );
}
export default MenuItem