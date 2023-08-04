import Link from 'next/link';

import { dataProductTabs } from './dataProductTabs';
import styles from './productTab5.module.scss';

const ProductTab5 = () => {
  const dataItems = dataProductTabs;

  return (
    <div className={styles.tabmenu}>
      <ul className={styles.tablist}>
        {dataItems.map((item) => (
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

export default ProductTab5