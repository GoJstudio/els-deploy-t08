'use client';

import { FaSearch } from 'react-icons/fa';

import styles from './search.module.scss';

const Search = () => {
  return (
    <div className={styles.search}>
      <form className={styles.form}>
        <input
          type="search"
          placeholder='Search...'
        />
        <div className={styles.iconBox}>
          <FaSearch className={styles.icon} />
        </div>
      </form>
    </div>
  )
}
export default Search