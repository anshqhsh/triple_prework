import styled from 'styled-components'

import { APPLE_IMG, PLAYSTORE_IMG } from 'assets'

interface RewardProps {
  src: string
}
const Container = styled.div`
  display: flex;
`
const RewardItem = styled.div<RewardProps>`
  height: 54px;
  padding: 5px 0px 5px 62px;
  margin-right: 39px;
  margin-top: 50px;
  display: inline-block;
  background-image: url(${(props) => props.src});
  background-position: left top;
  background-size: 54px 54px;
  background-repeat: no-repeat;
  font-size: 14px;
  line-height: 22px;
`
const RewardItemContainer = () => {
  return (
    <Container>
      <RewardItem src={PLAYSTORE_IMG}>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </RewardItem>
      <RewardItem src={APPLE_IMG}>
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </RewardItem>
    </Container>
  )
}
export default RewardItemContainer
