import Link from 'next/link';
import styles from './subMenu.module.scss';

const SubMenu = ({subMenuItems}) => {
  return (
    <div className={styles.submenu}>
      <ul className={styles.sublist}>
        {subMenuItems.map((item) => (
          <li
            key={item.id}
            className={styles.subitem}
          >
            <Link href={item.url}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SubMenu