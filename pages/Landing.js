import styled from 'styled-components'

const Landing = () => {
  return (
    <Container>
      <LeftContainer>
        <Box>About</Box>
        <Box>Projects</Box>
      </LeftContainer>
      <RightContainer>
        <Box>Coding</Box>
        <Box>Contact</Box>
      </RightContainer>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
`
const LeftContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  `
const RightContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Box = styled.div`
  height: 14rem;
  width: 28rem;
  background-color: black;
  color: white;
  margin: 0.5rem;
  border: 1px solid lightgray;
`

export default Landing