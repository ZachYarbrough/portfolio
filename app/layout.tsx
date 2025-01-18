import './styles/globals.css'


const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <html lang='en' className='font-inconsolata'>
        <body>
            <div className='mx-auto max-w-7xl px-4'>
              {children}
            </div>
        </body>
      </html>
    )
  }
  
  export default RootLayout