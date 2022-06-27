import styled from 'styled-components'

import StatisticSection from 'components/StatisticSection'
import ImageContainer from 'components/ImageContainer'
import GlobalStyle from 'styles/GlobalStyle'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  padding: 0 80px;
  margin: 0 auto;
  height: 100%;
`
const SectionWrap = styled.div`
  display: flex;
`

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <SectionWrap>
        <ImageContainer />
        <StatisticSection />
      </SectionWrap>
    </Container>
  )
}

export default App
