/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'

import RewardItemContainer from './RewardItemContainer'

import useFrameAnimation from 'hooks/useFrameAnimation'
import useCounter from 'hooks/useCounter'

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
// // 느려지는 애니메이션
// function easeOutQuart(x: number): number {
//   return 1 - Math.pow(1 - x, 4)
// }

// const frameDuration = 1000 / 60

// const target = 3500
// const duration = 2000

const StatisticSection = () => {
  const [count, setCount] = useState(0)
  const data = useFrameAnimation({ duration: 6000, targetValue: 3500 })
  // 초당 60프레임 120 frame
  // const frame = Math.round(duration / frameDuration)
  const count1 = useCounter({ duration: 2000, targetValue: 500 })
  useEffect(() => {
    const frame = 1000 / 60
    // const duration = 2000 // 2초동안 120번 변호
    const targetValue = 600
    let cnt = 0
    const id = setInterval(() => {
      cnt++
      setCount((targetValue / 120) * cnt)
    }, frame)
    if (count === targetValue) {
      return clearInterval(id)
    }
    return () => clearInterval(id)
  }, [count])

  return (
    <SectionWrap>
      {count1}
      {/* {count} */}
      <CountUp end={700} duration={2} />
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
