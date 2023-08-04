import styles from './splitScreen.module.scss';

const SplitScreen = ({
  // left: Left,
  // right: Right,
  children,
  leftWeight = '50%',
  rightWeight = '50%',
}) => {
  const [left, right] = children;

  return (
    <div className={styles.container}>
      <div
        className={styles.pane}
        weight={leftWeight}
        // style={{flex: leftWeight}}
        style={{width: leftWeight}}
      >
        {/* <Left /> */}
        {left}
      </div>
      <div
        className={styles.pane}
        weight={rightWeight}
        // style={{flex: rightWeight}}
        style={{width: rightWeight}}
      >
        {/* <Right /> */}
        {right}
      </div>
    </div>
  )
}
export default SplitScreen
