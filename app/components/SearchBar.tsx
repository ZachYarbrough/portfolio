'use client'

import { useContext } from "react"
import { SearchIcon } from "./assets/icons"
import { SearchContext } from "./context/searchContext"

const SearchBar = () => {
    const { toggleSearch } = useContext(SearchContext)

    return (
        <>
        <div className='flex justify-between items-end gap-2' style={{
            padding: '0.2rem 0.5rem',
            backgroundColor: 'var(--secondary-light)',
            borderRadius: '0.5rem',
            width: '85%',
            cursor: 'text'
        }} onClick={() => toggleSearch(true)}>
            <p>Search</p>
            <SearchIcon />
        </div>
        </>
    )
}

export default SearchBar
