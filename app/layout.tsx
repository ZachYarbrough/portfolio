import { Inconsolata } from 'next/font/google';

// Inconsolata font Configuration
const inconsolata = Inconsolata({
    subsets: ['latin'],
    display: 'swap',
  })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <html lang="en" className={inconsolata.className}>
        <body>
            {children}
        </body>
      </html>
    )
  }
  
  export default RootLayout