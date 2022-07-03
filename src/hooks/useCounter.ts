import { useState } from 'react'

import useInterval from './useInterval'

import { easeOutQuart } from 'styles/mixins/easings'

const frameDuration = 1000 / 60

const useCounter = (duration: number, targetValue: number) => {
  const [value, setValue] = useState(0)

  const [count, setCount] = useState(0)

  const [isRunning, setIsRunning] = useState(true)

  const frame = Math.round(duration / frameDuration)

  useInterval(
    () => {
      const easing = easeOutQuart(count / frame)
      const currentValue = Math.round(targetValue * easing)

      if (value !== targetValue) {
        setCount(count + 1)
        setValue(currentValue)
      } else {
        setIsRunning(false)
      }
    },
    isRunning ? frameDuration : null,
  )

  return value
}
export default useCounter
