import Header from './components/Header';
import Footer from './components/Footer';
import "./globals.css";
import LeftSidebar from './components/LeftSidebar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang='en' className='font-inconsolata'>
      <body className={`bg-background text-primary mx-4`}>
        <Header />
        <div>
          <LeftSidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout