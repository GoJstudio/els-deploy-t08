'use client';

import { createContext, useContext } from 'react';

import { useToggle } from '@/hooks/useToggle';
import styles from './accordion.module.scss';

// Create Context API
const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion = (props) => {
  const {title, content} = props;
  const {status: expand, toggleStatus: toggleExpand} = useToggle();

  const value = {expand, toggleExpand}

  return (
    <Provider value={value}>
      <div className={styles.accordion}>
        <div className={styles.container}>
          <AccordionHeader
            title={title}
          />
          <AccordionContent
            content={content}
          />
        </div>
      </div>
    </Provider>
  )
}
export default Accordion

// Header
const AccordionHeader = (props) => {
  const {title} = props;
  const {expand, toggleExpand} = useContext(AccordionContext);

  return (
    <button
      onClick={toggleExpand}
      className={styles.btn}
    >{title}
      <span>{expand ? '-' : '+'}</span>
    </button>
  )
}

// Content
const AccordionContent = (props) => {
  const {content} = props;
  const {expand} = useContext(AccordionContext);

  return (
    <div>
      { expand &&
        <div className={styles.content}>{content}</div>
      }
    </div>
  )
}