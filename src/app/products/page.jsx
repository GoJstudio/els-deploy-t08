import Link from 'next/link';
import { dataProducts } from './dataProducts';

import styles from './products.module.scss'

const ProductsMain = () => {
  const dataItems = dataProducts;

  return (
    <div className={styles.products}>
      <Link href="/products/ups">
        <h4>UPS</h4>
      </Link>
      <Link href="/products/inverter">
        <h4>Inverter</h4>
      </Link>
    </div>
  )
}
export default ProductsMain