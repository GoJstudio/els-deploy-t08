'use client';

import { createContext, useContext } from 'react';

import { useToggle } from '@/hooks/useToggle';
import styles from './accordion.module.scss';

// Create Context API
const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion02 = (props) => {
  const {title, content} = props;
  const {status: expand, toggleStatus: toggleExpand} = useToggle();

  const value = {expand, toggleExpand}

  return (
    <Provider value={value}>
      <div className={styles.accordion}>
        <div className={styles.container}>
          <AccordionHeader>{title}</AccordionHeader>
          <AccordionContent>{content}</AccordionContent>
        </div>
      </div>
    </Provider>
  )
}
export default Accordion02

// Header
const AccordionHeader = ({children}) => {
  const {expand, toggleExpand} = useContext(AccordionContext);

  return (
    <button
      onClick={toggleExpand}
      className={styles.btn}
    >{children}
      <span>{expand ? '-' : '+'}</span>
    </button>
  )
}

// Content
const AccordionContent = ({children}) => {
  const {expand} = useContext(AccordionContext);

  return (
    <div>
      { expand &&
        <div className={styles.content}>{children}</div>
      }
    </div>
  )
}