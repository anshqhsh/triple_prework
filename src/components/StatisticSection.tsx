/* eslint-disable no-console */
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import RewardItemContainer from './RewardItemContainer'

import useFrameAnimation from 'hooks/useFrameAnimation'

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

const frameDutation = 1000 / 60

const target = 350
const duration = 5000

const StatisticSection = () => {
  const frameRef = useRef(0)
  const [count, setCount] = useState(0)
  const data = useFrameAnimation({ duration: 5000, targetValue: 400 })

  // 초당 60프레임 120 frame
  const frame = Math.round(duration / frameDutation)
  let cnt = 0
  useEffect(() => {
    console.log('render')
    // TODO: 리팩토링
    cnt++
    const makeFrame = () => {
      const progress = easeOutQuart(frameRef.current / frame)
      const currentCount = Math.round(target * progress)

      setCount(currentCount)

      frameRef.current = requestAnimationFrame(makeFrame)

      if (currentCount === target) {
        cancelAnimationFrame(frameRef.current)
      }
    }

    console.log(cnt)
    makeFrame()
    return () => {
      // eslint-disable-next-line no-console
      console.log('here')
      console.log('??', cnt)
      cancelAnimationFrame(frameRef.current)
    }
  }, [frame])

  return (
    <SectionWrap>
      {count}
      {data}
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
