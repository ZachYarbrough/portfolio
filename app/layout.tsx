import Header from './components/Header';
import Footer from './components/Footer';
import "./globals.css";
import LeftSidebar from './components/LeftSidebar';
import { ThemeProvider } from './components/context/themeContext';
import SearchModal from './components/SearchModal';
import { SearchProvider } from './components/context/searchContext';



const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang='en' className='font-inconsolata'>
      <body className={`bg-background text-primary mx-4`}>
        <ThemeProvider>
          <SearchProvider>
            <Header />
            <div>
              <LeftSidebar />
              {children}
            </div>
            <Footer />
            <SearchModal />
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout