import DarkModeToggle from "./DarkModeToggle"
import InternalLink from "./InternalLInk"
import SearchBar from "./SearchBar"
import PostHeader from '@/app/components/PostHeader'

const Header = () => {


  return (
    <div className="flex justify-between items-center h-20 sticky top-0 bg-background sm-visible" style={{
      maxWidth: '750px',
      margin: '0 auto',
      zIndex: 999
    }}>
    <div>
      <InternalLink href='/' style={{ fontSize: '1.5rem' }}>Zach Yarbrough</InternalLink>
      <PostHeader headerNumber={1.1} noCopy={true} >Software Developer</PostHeader>  
    </div>
      <div className='flex items-center gap-2 w-[200px] max-[450px]:w-[150px]'>
        <SearchBar />
        <DarkModeToggle />
      </div>
    </div>
  )
}

export default Header
