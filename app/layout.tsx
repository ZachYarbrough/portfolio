import Header from './header';
import "./globals.css";
import LeftSidebar from './components/LeftSidebar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang='en' className='font-inconsolata'>
      <body className={`bg-background text-primary`}>
        <Header />
        <div>
          <LeftSidebar />
          {children}
        </div>
        <div className='mx-auto px-4 text-sm text-muted-foreground' style={{ maxWidth: '750px', margin: '1rem auto' }}>
          Handcrafted with love in 2025 ✌️
        </div>
      </body>
    </html>
  )
}

export default RootLayout