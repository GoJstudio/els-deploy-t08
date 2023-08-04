'use client';

import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import ServiceCard from '../serviceCard/ServiceCard';
import { dataServices } from './dataServices';
import styles from './services.module.scss';

const Services = () => {
  const dataItems = dataServices;

  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [cardsWidth, setCardsWidth] = useState(0);
  const [movingLength, setMovingLength] = useState(0.0);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;

    let widthContainer = 0;
    let widthCards = 0;
    
    if(container) {
      widthContainer = container.offsetWidth;
      setContainerWidth(widthContainer);
    }
    // console.log('containerWidth', containerWidth);

    if(cards) {
      widthCards = cards.offsetWidth;
      setCardsWidth(widthCards);
    }
    // console.log('cardsWidth', cardsWidth);
    
    let middlePoint = containerWidth / 2 - 24;
    let distance = cardsWidth / 2 - middlePoint;
    // console.log('middlePoint: ', middlePoint);
    // console.log(distance);

    setMovingLength(distance);
    // console.log(movingLength);
  },[activeIndex]);
  
  const updateIndex = (newIndex) => {
    if(newIndex < 0) {
      newIndex = 0;
    }else if(newIndex >= dataItems.length - 1) {
      newIndex = dataItems.length - 1;
    }

    // console.log(newIndex);
    // console.log(dataItems.length);
    // console.log(containerWidth);
    setActiveIndex(newIndex);
  }

  return (
    <section className={styles.services}>
      <div
        className={styles.container}
        ref={containerRef}
      >
        <div className={styles.headline}>
          <div className={styles.titleBox}>
            <FaChevronLeft
              onClick={() => {updateIndex(activeIndex - 1)}}
              className={styles.icon}
            />
            <h2 className={styles.title}>Our Services</h2>
            <FaChevronRight
              onClick={() => {updateIndex(activeIndex + 1)}}
              className={styles.icon}
            />
          </div>

          <p className={styles.desc}>A comprehensive suite of solutions to help you reduce your environmental footprint and achieve your sustainability goals.</p>
        </div>
        {/* headline */}
        

        <div
          className={styles.cardsContainer}
          style={{transform: `translate(-${activeIndex * movingLength}px)`}}
        >
          <div
            className={styles.cards}
            ref={cardsRef}
          >
            {dataItems.map((item) => (
              <ServiceCard
                key={item.id}
                order={item.id}
                img={item.image}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
          {/* cards */}
        </div>
        {/* cardsContainer */}

      </div>
      {/* container */}      
    </section>
  )
}
export default Services