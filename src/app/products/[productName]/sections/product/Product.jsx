import ProductCard from '../productCard/ProductCard';
import TextCard from '../textCard/TextCard';

import styles from './product.module.scss';

const Product = ({dataItem}) => {
  const isEven = dataItem.id % 2 === 0;

  return (
    <section
      className={`
        ${styles.product}
        ${isEven ? styles.even : styles.odd}`
      }
    >
      <div className={styles.container}>

        <div className={styles.cards} >
          <ProductCard
            index={dataItem.id}
            title={dataItem.name}
            desc={dataItem.desc}
            img={dataItem.img}
          />
          <TextCard
            application={dataItem.application}
            feature={dataItem.feature}
          />
        </div>

      </div>
      {/* container */}
    </section>
  )
}
export default Product