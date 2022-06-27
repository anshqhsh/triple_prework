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
const StatisticSection = () => {
  return (
    <SectionWrap>
      <StatisticText>
        <strong>700만 명</strong>의 여행자
      </StatisticText>
      <StatisticText>
        <strong>100만 개</strong>여행 리뷰
      </StatisticText>
      <StatisticText>
        <strong>470만 개</strong>의 여행 일정
      </StatisticText>
      <RewardItemContainer />
    </SectionWrap>
  )
}
export default StatisticSection
