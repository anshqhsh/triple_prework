import styles from './testcomponent.module.scss'

const data = [1, 2, 3, 4, 5, 6]
const TestComponent = () => {
  return (
    <div>
      <h1>h1</h1>
      <div className={styles.container} />
      {data.map((i) => {
        return <div key={i} />
      })}
    </div>
  )
}

export default TestComponent
