import styled from 'styled-components'

import { APPLE_IMG, PLAYSTORE_IMG } from 'assets'
import { colors } from 'styles/constants/colors'
import { fadeInKeyFrames } from 'styles/mixins/animations'

interface RewardProps {
  src: string
}

const Container = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.awardColor};
  opacity: 0;
  animation: ${fadeInKeyFrames};
  animation-duration: 700ms;
  animation-timing-function: cubic-bezier(0.37, 0.24, 0.05, 1.02);
  animation-delay: 200ms;
  animation-fill-mode: forwards;
`
const RewardItem = styled.div<RewardProps>`
  display: inline-block;
  height: 54px;
  padding: 5px 0px 5px 62px;
  margin-top: 50px;
  margin-right: 39px;
  font-size: 14px;
  line-height: 22px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 54px 54px;
`
const RewardAppItems = () => {
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
export default RewardAppItems
