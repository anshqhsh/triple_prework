import styled from 'styled-components'

import { TRIPLELOGO_IMG } from 'assets'

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
`

const ImageContainer = () => {
  return <ContentLogo>2019년 2월 기준</ContentLogo>
}
export default ImageContainer
