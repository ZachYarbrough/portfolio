import Header from './header';
import "./globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang='en' className='font-inconsolata'>
      <body className={`bg-background text-foreground`}>
        <Header />
        <div className='mx-auto max-w-7xl px-4'>
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout