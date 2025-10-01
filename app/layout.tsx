import Header from './components/Header';
import Footer from './components/Footer';
import "./globals.css";
import SearchModal from './components/SearchModal';
import { SearchProvider } from './components/context/searchContext';
import ImageModal from './components/imageModal';
import { ModalProvider } from './components/context/modalContext';
import ThemeWrapper from './components/ThemeWrapper';
import { getMetadata } from './components/data';
import { getAllBlurredImages } from './utils/preloadBlurredImages'


const RootLayout = ({ children }: { children: React.ReactNode }) => {
   
  const postMetadata = getMetadata('posts') || []
  const projectMetadata = getMetadata('projects') || []

  const blurredImages = getAllBlurredImages('./public/images')

  return (
    <html lang='en' className='font-inconsolata' suppressHydrationWarning>
      <head>
        {blurredImages.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))}
      </head>
      <body className={`bg-background text-primary mx-4`}>
        <ThemeWrapper>
          <SearchProvider>
	    <ModalProvider>
		<Header />
		<div>
		{children}
		</div>
		<Footer />
		<ImageModal />
	    </ModalProvider>
            <SearchModal posts={postMetadata} projects={projectMetadata} />
          </SearchProvider>
        </ThemeWrapper>
      </body>
    </html>
  )
}

export default RootLayout
