import styled from 'styled-components'

const leftBoxData = [
  {
    id: 1,
    title: 'About',
    img: 'placeholder'
  },
  {
    id: 2,
    title: 'Projects',
    img: 'placeholder'
  },
]
const rightBoxData = [
  {
    id: 3,
    title: 'something',
    img: 'placeholder'
  },
  {
    id: 4,
    title: 'Contact',
    img: 'placeholder'
  },
]

const Landing = () => {
  return (
    <Container>
      <LeftContainer>
          {leftBoxData.map((data, i) => (
            <Box
                key={i}
                src={require(`./${data.img}.png`)}
                alt={data.title}
              >
                <img 
                  src={data.img} 
                  alt={data.title} 
                />
            </Box>
          ))}
      </LeftContainer>
      <RightContainer>
        {rightBoxData.map((data, i) => (
              <Box
                key={i}
              >
                <img 
                  src={require(`./${data.img}.png`)}
                  alt={data.title}
                  />
              </Box>
            ))}
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
  margin: 0.5rem;
  border: 1px solid lightgray;
`

export default Landing