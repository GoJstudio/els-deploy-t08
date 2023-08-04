import { GoogleMapComp } from '@/components/utilsComponents';
import styles from './map.module.scss';

const Map = () => {
  return (
    <section className={styles.map}>
      <GoogleMapComp />
    </section>
  )
}
export default Map