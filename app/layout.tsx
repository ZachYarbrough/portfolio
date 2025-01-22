import Header from './header';
import "./globals.css";
import LeftSidebar from './components/LeftSidebar';
import Link from 'next/link';

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang='en' className='font-inconsolata'>
      <body className={`bg-background text-primary mx-4`}>
        <Header />
        <div>
          <LeftSidebar />
          {children}
        </div>
        <div className='text-sm text-muted-foreground h-20' style={{ maxWidth: '750px', margin: '2rem auto', borderTop: '1px solid var(--secondary-light)', paddingTop: '2rem' }}>
          <p>Created and Maintained by <Link className='text-highlight hover:cursor-pointer inline-flex font-bold' href='https://github.com/zachyarbrough' target='_blank' rel='noopener noreferrer'>Zach Yarbrough</Link></p>
        </div>
      </body>
    </html>
  )
}

export default RootLayout