import DarkModeToggle from "./DarkModeToggle"
import InternalLink from "./InternalLInk"
import SearchBar from "./SearchBar"

const Header = () => {


  return (
    <div className="flex justify-between items-center h-20 sticky top-0 bg-background sm-hidden" style={{
      maxWidth: '750px',
      margin: '0 auto'
    }}>
      <InternalLink link='' style={{ fontSize: '2rem' }}>Zach Yarbrough</InternalLink>
      <div className='flex items-center gap-2' style={{ width: '200px' }}>
        <SearchBar />
        <DarkModeToggle />
      </div>
    </div>
  )
}

export default Header