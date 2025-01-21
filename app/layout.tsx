import Header from './header';
import "./globals.css";
import LeftSidebar from './components/LeftSidebar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang='en' className='font-inconsolata'>
      <body className={`bg-background text-primary`}>
        <Header />
        <div className='mx-auto max-w-7xl px-4'>
          <LeftSidebar />
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout