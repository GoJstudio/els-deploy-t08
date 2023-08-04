import Link from 'next/link';

import { dataProductTabs } from './dataProductTabs';
import styles from './productTab2.module.scss';

const ProductTab2 = () => {
  const dataItems = dataProductTabs;

  return (
    <div className={styles.tabmenu}>
      <ul className={styles.tablist}>
        {dataItems.slice(3, 5).map((item) => (
          <li
          className={styles.tabItem}
          key={item.id}
          >
            <Link href='/'>
              {item.name}
            </Link>           
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductTab2