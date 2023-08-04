import ProductTab5 from '../productTab/ProductTab5';
import ProductTab3 from '../productTab/ProductTab3';
import ProductTab2 from '../productTab/ProductTab2';
import ProductCard from '../productCard/ProductCard';
import { dataProducts } from './dataProducts';
import styles from './products.module.scss';

const Products = () => {
  const dataItems = dataProducts;

  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <ProductTab5 />
        <ProductTab3 />

        <div className={styles.cards} >
          <ProductCard
            title={dataItems[0].title}
            display={dataItems[0].display}
            desc={dataItems[0].desc}
            img1={dataItems[0].img1}
            img2={dataItems[0].img2}
          />
        </div>

        <ProductTab2 />
        <div className={styles.cardsLow} >
          <ProductCard
            title={dataItems[1].title}
            display={dataItems[1].display}
            desc={dataItems[1].desc}
            img1={dataItems[1].img1}
            img2={dataItems[1].img2}
          />
        </div>

      </div>
      {/* container */}
    </section>
  )
}
export default Products