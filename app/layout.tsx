import Header from './components/Header';
import Footer from './components/Footer';
import "./globals.css";
import SearchModal from './components/SearchModal';
import { SearchProvider } from './components/context/searchContext';
import ThemeWrapper from './components/ThemeWrapper';
import { getMetadata } from './components/data';


const RootLayout = ({ children }: { children: React.ReactNode }) => {
   
  const postMetadata = getMetadata('posts')
  const projectMetadata = getMetadata('projects')

  return (
    <html lang='en' className='font-inconsolata' suppressHydrationWarning>
      <body className={`bg-background text-primary mx-4`}>
        <ThemeWrapper>
          <SearchProvider>
            <Header />
            <div>
              {children}
            </div>
            <Footer />
            <SearchModal posts={postMetadata} projects={projectMetadata} />
          </SearchProvider>
        </ThemeWrapper>
      </body>
    </html>
  )
}

export default RootLayout
