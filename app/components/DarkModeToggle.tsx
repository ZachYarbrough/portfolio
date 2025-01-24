'use client'

import { MoonIcon, SunIcon } from "./assets/icons"
import { useState, useContext } from "react";
import { useEffect } from "react";
import { ThemeContext } from "./context/themeContext";

const DarkModeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const [darkMode, setDarkMode] = useState(false)

    // Set the theme on initial load
    useEffect(() => {
        setDarkMode(theme === 'dark')
    }, [theme])

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            setDarkMode(event.matches)
        });
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
        <button className='cursor-pointer' onClick={() => toggleTheme()}>{darkMode ? <MoonIcon /> : <SunIcon />}</button>
    )
}

export default DarkModeToggle