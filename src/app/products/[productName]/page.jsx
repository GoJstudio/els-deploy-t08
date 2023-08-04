'use client';

import { useEffect, useState } from 'react';

// import { dataUPS, dataInverter } from './productData';
import { dataUPS, dataInverter } from './productData';
import { Title, Product } from './sections';

import styles from './productName.module.scss';


const ProductName = ({params}) => {
  const paramsName = params.productName;
  const dataTest = dataUPS;

  const dataItems = [
    dataUPS,
    dataInverter,
  ];

  const [selectedData, setSelectedData] = useState(dataUPS);

  useEffect(() => {

    const foundItem = dataItems.find((item) => item.name === paramsName);
    if (foundItem) {
        console.log(foundItem);
        setSelectedData(foundItem);
      }
    }, [paramsName]);
    
  console.log(selectedData);

  return (
    <div>
      <Title
        title={selectedData.title}
        alt={selectedData.alt}
        imgSrc={selectedData.titleImg}
      />

      {selectedData.productItems.map((item) => (
        <Product
          key={item.id}
          dataItem={item}
        />
      ))}
    </div>
  )
}
export default ProductName