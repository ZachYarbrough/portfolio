'use client'

import { createContext, useState } from 'react';

export const SearchContext = createContext({
    searchToggle: false,
    toggleSearch: (toggle?: boolean) => { }
})

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchToggle, setSearchToggle] = useState<boolean>(false)

    const toggleSearch = (toggle?: boolean) => {
        setSearchToggle((prev) => toggle ? toggle : !prev)
    }

    return (
        <SearchContext.Provider value={{
            searchToggle,
            toggleSearch
        }}>
            {children}
        </SearchContext.Provider>
    )
} 