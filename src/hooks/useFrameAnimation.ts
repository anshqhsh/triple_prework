/* eslint-disable no-console */
import { useRef, useState } from 'react'

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'

interface Props {
  duration: number
  targetValue: number
  // transition: 'string'
}
function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4)
}
const frameDuration = 1000 / 60
// duration(ms) : 1000(1s), transition : easeOutQuart
const useFrameAnimation = ({ duration, targetValue }: Props) => {
  const frameRef = useRef(0)
  const [value, setValue] = useState(0)

  const frame = Math.round(duration / frameDuration) // 60 frame per second

  useIsomorphicLayoutEffect(() => {
    const makeEasingAnimation = () => {
      console.log(frameRef.current)
      const easing = easeOutQuart(frameRef.current / frame)
      const currentValue = Math.round(targetValue * easing)
      setValue(currentValue)
      console.log('call')
      frameRef.current = requestAnimationFrame(makeEasingAnimation)
      if (currentValue === targetValue) {
        cancelAnimationFrame(frameRef.current)
      }
    }

    makeEasingAnimation()
    return () => {
      cancelAnimationFrame(frameRef.current)
    }
  }, [frame, targetValue])

  return value
}

export default useFrameAnimation
