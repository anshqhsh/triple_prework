import styled from 'styled-components'

import RewardItemContainer from './RewardAppItems'

import useCounter from 'hooks/useCounter'
import { colors } from 'styles/constants/colors'
import { fadeInKeyFrames } from 'styles/mixins/animations'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin-left: 223px;
  font-size: 36px;
  letter-spacing: -1px;
`
const TextWrap = styled.div`
  color: ${colors.sectionColor};
  opacity: 0;
  animation: ${fadeInKeyFrames};
  animation-duration: 700ms;
  animation-timing-function: cubic-bezier(0.37, 0.24, 0.05, 1.02);
  animation-delay: 100ms;
  animation-fill-mode: forwards;
`
const StatisticText = styled.p`
  margin-bottom: 20px;
`

const StatisticSection = () => {
  const userCount = useCounter(5000, 350)
  const reviewCount = useCounter(5000, 21)
  const saveCount = useCounter(5000, 650)

  return (
    <Container>
      <TextWrap>
        <StatisticText>
          <strong>{userCount}만 명</strong>의 사용자
        </StatisticText>
        <StatisticText>
          <strong>{reviewCount}만 개</strong>의 리뷰
        </StatisticText>
        <StatisticText>
          <strong>{saveCount}만 개</strong>의 저장
        </StatisticText>
      </TextWrap>
      <RewardItemContainer />
    </Container>
  )
}
export default StatisticSection
