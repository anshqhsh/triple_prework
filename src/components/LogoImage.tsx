import styled from 'styled-components'

import { TRIPLELOGO_IMG } from 'assets'
import { colors } from 'styles/constants/colors'
import { fadeInKeyFrames } from 'styles/mixins/animations'

const ContentLogo = styled.div`
  top: 150px;
  box-sizing: border-box;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  font-size: 15px;
  color: ${colors.logoColor};
  text-align: center;
  background-image: url(${TRIPLELOGO_IMG});
  background-repeat: no-repeat;
  background-size: 400px 338px;
  animation: ${fadeInKeyFrames};
  animation-duration: 700ms;
  animation-timing-function: cubic-bezier(0.37, 0.24, 0.05, 1.02);
`

const LogoImage = () => {
  return <ContentLogo>2019년 2월 기준</ContentLogo>
}
export default LogoImage
