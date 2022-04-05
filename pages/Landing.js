import styled from 'styled-components'
import Footer from './footer/Footer'

const Landing = () => {
  return (
    <Container>
        Landing  page
        <FooterContainer>
            <Footer />
        </FooterContainer>
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

const FooterContainer = styled.div`
    position: fixed;
`

export default Landing