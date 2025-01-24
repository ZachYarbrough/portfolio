'use client'

import { useCallback, useContext, useEffect, useState } from "react"
import { SearchContext } from "./context/searchContext"

const SearchModal = () => {
    const [searchResults, setSearchResults] = useState([])
    const { searchToggle, toggleSearch } = useContext(SearchContext)
    const [search, setSearch] = useState('')

    const escFunction = useCallback((event: KeyboardEvent) => {
        if (event.key === "Escape") {
            toggleSearch(false)
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    useEffect(() => {
        if (searchToggle === false) {
            setSearch('')
        }
    }, [searchToggle])

    return (
        <>
            {searchToggle && <div style={{ zIndex: 1000, width: '100vw', height: '100vh', position: 'fixed', display: 'flex', justifyContent: 'center', alignItems: 'top', top: 0, left: 0 }}>
                <div style={{ position: 'absolute', width: '100vw', height: '100vh', backgroundColor: 'black', opacity: 0.3, cursor: 'pointer' }} onClick={() => toggleSearch(false)} />
                <div style={{
                    zIndex: 1001,
                    width: '750px',
                    height: '0px',
                    margin: '0 1rem'
                }}>
                    <input autoFocus type='text' placeholder='Search through posts, projects, and tags' value={search} onChange={(e) => setSearch(e.target.value)} style={{
                        padding: '0.2rem 0.5rem',
                        backgroundColor: 'var(--secondary-light)',
                        borderRadius: '0.5rem',
                        maxWidth: '750px',
                        margin: '6.6rem auto 0 auto',
                        width: '100%',
                        cursor: 'text',
                    }} />
                    {searchResults.length > 0 && <div style={{ display: 'flex', backgroundColor: 'var(--background)', flexDirection: 'column', gap: '1rem', padding: '2rem 0.5rem 1rem 0.5rem', margin: '-1rem 0 0 0', borderRadius: '0.5rem' }}>
                    </div>}
                </div>
            </div>
            }
        </>
    )
}

export default SearchModal