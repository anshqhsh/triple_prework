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
