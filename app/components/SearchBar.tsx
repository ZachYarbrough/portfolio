import { SearchIcon } from "./assets/icons"

const SearchBar = () => {
    return (
        <div className='flex justify-between items-center gap-2' style={{
            padding: '0.2rem 0.5rem',
            backgroundColor: 'var(--secondary-light)',
            borderRadius: '0.5rem',
            width: '85%',
            cursor: 'text'
        }}>
            <p>Search</p>
            <SearchIcon />
        </div>
    )
}

export default SearchBar