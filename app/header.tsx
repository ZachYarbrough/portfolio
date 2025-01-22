'use client'

import { MoonIcon, SunIcon } from "./components/assets/icons"
import { useEffect, useState } from "react"

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  // Set the theme on initial load
  useEffect(() => {
    const listenStorageChange = () => {
      const theme = window.localStorage.getItem('theme')
      if (theme === 'dark') setDarkMode(true)
    };

    window.addEventListener("storage", listenStorageChange);
    return () => window.removeEventListener("storage", listenStorageChange);
  }, [])

  // Update the theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')

      window.localStorage.setItem('theme', 'dark')
      window.dispatchEvent(new Event("storage"));
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')

      window.localStorage.setItem('theme', 'light')
      window.dispatchEvent(new Event("storage"));
    }
  }, [darkMode])

  return (
    <div className="flex justify-between items-center h-20 sticky top-0 bg-background" style={{
      maxWidth: '750px', 
      margin: '0 auto'
    }}>
      <h1 className="lg:hidden">Hello World</h1>
      <button className="lg:hidden" onClick={() => setDarkMode(!darkMode)}>{darkMode ? <MoonIcon /> : <SunIcon />}</button>
    </div>
  )
}

export default Header