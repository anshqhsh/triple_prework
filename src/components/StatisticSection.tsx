import styled, { keyframes } from 'styled-components'

import RewardItemContainer from './RewardItemContainer'

import useCounter from 'hooks/useCounter'

const appearAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`
const SectionWrap = styled.section`
  margin-left: 223px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  font-size: 36px;
  letter-spacing: -1px;
  opacity: 0;
  animation: ${appearAnimation};
  animation-duration: 700ms;
  animation-delay: 100ms;
  animation-timing-function: cubic-bezier(0.37, 0.24, 0.05, 1.02);
`
const StatisticText = styled.p`
  margin-bottom: 20px;
`

const StatisticSection = () => {
  const userCount = useCounter(2000, 500)
  const reviewCount = useCounter(2000, 21)
  const saveCount = useCounter(2000, 650)

  return (
    <SectionWrap>
      <StatisticText>
        <strong>{userCount}만 명</strong>의 사용자
      </StatisticText>
      <StatisticText>
        <strong>{reviewCount}만 개</strong>의 리뷰
      </StatisticText>
      <StatisticText>
        <strong>{saveCount}만 개</strong>의 저장
      </StatisticText>
      <RewardItemContainer />
    </SectionWrap>
  )
}
export default StatisticSection
