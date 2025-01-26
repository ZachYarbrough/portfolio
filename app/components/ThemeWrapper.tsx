'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  // This useEffect is needed to prevent hydration mismatch between server and client rendering
  // During server-side rendering, we don't know the user's theme preference
  // By waiting until the component mounts on the client side before rendering,
  // we ensure the theme is correctly synchronized and avoid any flash of incorrect theme
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider defaultTheme='system' enableSystem={true} attribute='class'>
      {children}
    </ThemeProvider>
  )
}