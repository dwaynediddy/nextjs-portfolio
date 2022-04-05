import styled from 'styled-components'

const ComingSoon = () => {
  return (
    <div>
      <Hide>
        See you Soon
      </Hide>
    </div>
  )
}

const Hide = styled.h1`
  height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  size: 18rem;
`

export default ComingSoon