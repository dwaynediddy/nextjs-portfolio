import styles from '../styles/Home.module.css'
import { useTheme } from "next-themes"
import styled from 'styled-components'

import ComingSoon from './ComingSoon'
import CodeTime from '../components/CodeTime'

export default function Home() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  function handleClick() {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  return (
    <Container>
      <div>
        <Button
          type="checkbox"
          onClick={handleClick}
          >
          {resolvedTheme === "light" ? "dark" : "light"} Mode
        </Button>
      </div>
        {/* <ComingSoon /> */}
        <CodeTime />                           
    </Container>
  )
}
const Container = styled.div`
  padding: 1rem;
`

const Button = styled.button`
  width: 8rem;
  height: 2rem;
  border-radius: 2rem;
`
