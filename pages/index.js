import { useTheme } from "next-themes"
import styled from 'styled-components'

import ComingSoon from './ComingSoon'

export default function Home() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const handleClick = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }
  return (
    <Container>
        <Button
          onClick={handleClick}
        >
          Press me!
        </Button>
        <ComingSoon />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Button = styled.button`
  height: 2rem;
  width: 10rem;
  border: 1px solid #000;
  border-radius: 2rem;
  color: #fff;
  background-color: #000;
  padding: 0.5rem;
`

