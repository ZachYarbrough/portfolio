'use client'

import { MoonIcon, SunIcon } from "./assets/icons"
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button className='theme-toggle' title='dark-mode-toggle' onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}>
            { currentTheme === 'dark' ? <MoonIcon /> : <SunIcon /> }
        </button>
    )
}

export default DarkModeToggle
