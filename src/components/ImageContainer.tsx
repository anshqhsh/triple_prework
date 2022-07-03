import styled, { keyframes } from 'styled-components'

import { TRIPLELOGO_IMG } from 'assets'

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

const ContentLogo = styled.div`
  top: 150px;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  background-image: url(${TRIPLELOGO_IMG});
  background-repeat: no-repeat;
  background-size: 400px 338px;
  text-align: center;
  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
  box-sizing: border-box;
  animation: ${appearAnimation};
  animation-duration: 700ms;
  animation-timing-function: cubic-bezier(0.37, 0.24, 0.05, 1.02);
`

const ImageContainer = () => {
  return <ContentLogo>2019년 2월 기준</ContentLogo>
}
export default ImageContainer
