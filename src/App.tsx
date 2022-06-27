import styled from 'styled-components'

import StatisticSection from 'components/StatisticSection'
import ImageContainer from 'components/ImageContainer'
import GlobalStyle from 'styles/GlobalStyle'

const Container = styled.div`
  display: flex;
  min-width: 1200px;
  padding: 0 80px;
`

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <ImageContainer />
      <StatisticSection />
    </Container>
  )
}

export default App
