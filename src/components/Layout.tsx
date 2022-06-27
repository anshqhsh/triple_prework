import styled from 'styled-components'

import ImageContainer from './ContentLogo'

const Container = styled.div`
  min-width: 1200px;
  padding: 0 80px;
`

const Layout = () => {
  return (
    <Container>
      <ImageContainer />
    </Container>
  )
}

export default Layout
