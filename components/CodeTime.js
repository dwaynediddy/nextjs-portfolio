import styled from 'styled-components'

const CodeTime = () => {
  return (
    <Container>
        <Header>CodeTime</Header>
        <ChartContainer>
            <Chart>
            <figure>
                <embed src="https://wakatime.com/share/@DwayneDiddy/61372929-f2e8-4203-899f-c3bad48d7506.svg">
                </embed>
            </figure>
            </Chart>
            <Chart>
                <figure>
                    <embed src="https://wakatime.com/share/@DwayneDiddy/c5bf81a9-be35-4ed4-95d8-ba95c20e67ba.svg">
                    </embed>
                </figure>
            </Chart>
        </ChartContainer>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Header = styled.h2`
    text-align: center;
`

const ChartContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 900px) {
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    @media (max-width: 720px) {
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`

const Chart = styled.div`
    height: 34rem;
    width: 45%;
    box-shadow: 10px 10px 20px 0px rgba(171,171,171,0.75);
    -webkit-box-shadow: 10px 10px 20px 0px rgba(171,171,171,0.75);
    -moz-box-shadow: 10px 10px 20px 0px rgba(171,171,171,0.75);
    @media (max-width: 1300px) {
        height: 30rem;
    }
    @media (max-width: 1100px) {
        height: 70%;
        width: 80%
    }
    @media (max-width: 720px) {
        height: 100%;
        width: 80%;
    }
`

export default CodeTime