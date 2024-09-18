import React from 'react'
import { useTheme } from 'next-themes'

const ThemeToggle = React.memo(() => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  )
})

ThemeToggle.displayName = 'ThemeToggle'

export default ThemeToggle