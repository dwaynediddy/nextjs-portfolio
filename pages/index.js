import styles from '../styles/Home.module.css'
import { useTheme } from "next-themes"

import ComingSoon from './ComingSoon'

export default function Home() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  return (
    <div className={styles.container}>
      <div>
          {resolvedTheme !== theme ? `${theme} (${resolvedTheme})` : theme} mode
      </div>
        <ComingSoon />
        <button
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
          Toggle {resolvedTheme === "light" ? "dark" : "light"} mode
        </button>
    </div>
  )
}
