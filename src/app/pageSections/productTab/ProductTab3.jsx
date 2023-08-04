import Link from 'next/link';

import { dataProductTabs } from './dataProductTabs';
import styles from './productTab3.module.scss';

const ProductTab3 = () => {
  const dataItems = dataProductTabs;

  return (
    <div className={styles.tabmenu}>
      <ul className={styles.tablist}>
        {dataItems.slice(0, 3).map((item) => (
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

export default ProductTab3