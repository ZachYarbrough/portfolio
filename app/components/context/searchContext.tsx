'use client'

import React, { createContext, useState } from 'react';

type SearchContextType = {
  searchToggle: boolean
  toggleSearch: (toggle?: boolean, index?: number) => void
  highlightedIndex: number,
  setHighlightedIndex: React.Dispatch<React.SetStateAction<number>>
}

export const SearchContext = createContext<SearchContextType>({
    searchToggle: false,
    toggleSearch: (toggle?: boolean, index?: number) => { },
    highlightedIndex: -1,
    setHighlightedIndex: () => {},
})

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchToggle, setSearchToggle] = useState<boolean>(false)
    const [highlightedIndex,setHighlightedIndex] = useState<number>(-1)

    const toggleSearch = (toggle: boolean = false, index: number = -1) => {
        setSearchToggle((prev) => typeof toggle === 'boolean' ? toggle : !prev)
	setHighlightedIndex(index)
    }

    return (
        <SearchContext.Provider value={{
            searchToggle,
            toggleSearch,
	    highlightedIndex,
	    setHighlightedIndex
        }}>
            {children}
        </SearchContext.Provider>
    )
} 
