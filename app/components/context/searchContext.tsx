'use client'

import React, { createContext, useState } from 'react';

type SearchContextType = {
  searchToggle: boolean
  toggleSearch: (toggle?: boolean, index?: number) => void
  highlightedIndex: number,
  setHighlightedIndex: React.Dispatch<React.SetStateAction<number>>,
  registerSearchRef: (inputRef: React.RefObject<HTMLInputElement | null> | null) => void,
  searchRef: React.RefObject<HTMLInputElement | null> | null

}

export const SearchContext = createContext<SearchContextType>({
    searchToggle: false,
    toggleSearch: (toggle?: boolean, index?: number) => { },
    highlightedIndex: -1,
    setHighlightedIndex: () => {},
    registerSearchRef: (inputRef: React.RefObject<HTMLInputElement | null> | null) => { },
    searchRef: null 
})

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchToggle, setSearchToggle] = useState<boolean>(false)
    const [highlightedIndex,setHighlightedIndex] = useState<number>(-1)
    const [searchRef, setSearchRef] = useState<React.RefObject<HTMLInputElement | null> | null>(null)

    const toggleSearch = (toggle: boolean = false, index: number = -1) => {
        setSearchToggle((prev) => typeof toggle === 'boolean' ? toggle : !prev)
	setHighlightedIndex(index)
    }

    const registerSearchRef = (inputRef: React.RefObject<HTMLInputElement | null> | null) => {
	  setSearchRef(inputRef)
    }

    return (
        <SearchContext.Provider value={{
            searchToggle,
            toggleSearch,
	    highlightedIndex,
	    setHighlightedIndex,
	    registerSearchRef,
	    searchRef
        }}>
            {children}
        </SearchContext.Provider>
    )
} 
