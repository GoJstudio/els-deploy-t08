import { SplitScreen } from '..';

const LeftHandComponent = ({name}) => {
  return (
    <div className={styles.left}>
      <h1>{name}</h1>
    </div>
  );
}

const RightHandComponent = ({message}) => {
  return (
    <div className={styles.right}>
      <h1>{message}</h1>
    </div>
  );
}

const _test = () => {
  return (
    <div>
      <SplitScreen
        leftWeight='30%'
        rightWeight='70%'
      >
        <LeftHandComponent name="Shaun" />
        <RightHandComponent message="Hello" />
      </SplitScreen>
    </div>
    
  )
}
export default _test