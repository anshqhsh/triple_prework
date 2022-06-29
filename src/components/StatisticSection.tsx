import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import RewardItemContainer from './RewardItemContainer'

const SectionWrap = styled.section`
  margin-left: 223px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  font-size: 36px;
  letter-spacing: -1px;
`
const StatisticText = styled.p`
  margin-bottom: 20px;
`
// 느려지는 애니메이션
function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4)
}
// function easeOutCirc(x: number): number {
//   return Math.sqrt(1 - Math.pow(x - 1, 2))
// }
// function easeOutBack(x: number): number {
//   const c1 = 1.70158
//   const c3 = c1 + 1

//   return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2)
// }
const frameDutation = 1000 / 60

const StatisticSection = () => {
  const frameRef = useRef(0)
  const [count, setCount] = useState(0)

  const target = 350
  const duration = 2000

  // 초당 60프레임 120 frame
  const frame = Math.round(duration / frameDutation)

  // eslint-disable-next-line no-console
  console.log(frame)

  useEffect(() => {
    // TODO: 리팩토링
    const makeFrame = () => {
      const progress = easeOutQuart(frameRef.current / frame)
      const currentCount = Math.round(target * progress)

      setCount(currentCount)

      frameRef.current = requestAnimationFrame(makeFrame)

      if (currentCount === target) {
        cancelAnimationFrame(frameRef.current)
      }
    }

    makeFrame()
    return () => {
      cancelAnimationFrame(frameRef.current)
    }
  }, [frame])

  return (
    <SectionWrap>
      {count}
      <StatisticText>
        <strong>350만 명</strong>의 사용자
      </StatisticText>
      <StatisticText>
        <strong>21만 개</strong>의 리뷰
      </StatisticText>
      <StatisticText>
        <strong>650만 개</strong>의 저장
      </StatisticText>
      <RewardItemContainer />
    </SectionWrap>
  )
}
export default StatisticSection
