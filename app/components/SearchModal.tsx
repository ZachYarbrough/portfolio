'use client'

import { useCallback, useContext, useEffect, useState } from "react"
import { SearchContext } from "./context/searchContext"
import ProjectPreview from "./ProjectPreview"
import PostPreview from "./PostPreview"

const SearchModal = ({ posts, projects }: { posts: any[], projects: any[] }) => {
    const [searchResults, setSearchResults] = useState<{
        posts: any[],
        projects: any[]
    }>({
        posts: [],
        projects:[]
    })
    const { searchToggle, toggleSearch } = useContext(SearchContext)
    const [search, setSearch] = useState('')

    useEffect(() => {
	if (search) {
        const lowerCaseSearch = search?.toLowerCase()
        const searchedPosts = posts.filter((post: any) => {
            return post?.description?.toLowerCase()?.includes(lowerCaseSearch) || 
            post?.tags?.some((tag: string) => tag?.toLowerCase().includes(lowerCaseSearch)) ||
            post?.title?.toLowerCase()?.includes(lowerCaseSearch) ||
            post?.live?.toLowerCase()?.includes(lowerCaseSearch) ||
            post?.source?.toLowerCase()?.includes(lowerCaseSearch)
	    })
        const searchedProjects = projects.filter((projects: any) => {
            return projects?.description?.toLowerCase()?.includes(lowerCaseSearch) || 
            projects?.tags?.some((tag: string) => tag?.toLowerCase().includes(lowerCaseSearch)) ||
            projects?.title?.toLowerCase()?.includes(lowerCaseSearch) ||
            projects?.live?.toLowerCase()?.includes(lowerCaseSearch) ||
            projects?.source?.toLowerCase()?.includes(lowerCaseSearch)
	    })
	    setSearchResults({
            posts: searchedPosts,
            projects: searchedProjects
        })
	} else {
	    setSearchResults({
            posts:[],
            projects: []
        })
	}
    }, [search])

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
                    <input autoFocus type='text' placeholder='Search for posts, projects, and tags' value={search} onChange={(e) => setSearch(e.target.value)} style={{
                        padding: '0.2rem 0.5rem',
                        backgroundColor: 'var(--secondary-light)',
                        borderRadius: '0.5rem',
                        maxWidth: '750px',
                        margin: '6.6rem auto 0 auto',
                        width: '100%',
                        cursor: 'text',
                    }} />
                    {searchResults.projects.length > 0 && 
                        <div style={{ display: 'flex', backgroundColor: 'var(--background)', flexDirection: 'column', gap: '1rem', padding: '2rem 0.5rem 1rem 0.5rem', margin: '-1rem 0 0 0', borderRadius: '0.5rem' }}>
                            {searchResults.projects.map((result: any, index: number) => {
                                return (
                                    <PostPreview key={result.slug} hidePreview={true} {...result} isProjectPost={true} isSearch={true} />
                                )
                            })}
                        </div>
                    }
                    {searchResults.posts.length > 0 && 
                    <div style={{ display: 'flex', backgroundColor: 'var(--background)', flexDirection: 'column', gap: '1rem', padding: '2rem 0.5rem 1rem 0.5rem', margin: '-1rem 0 0 0', borderRadius: '0.5rem' }}>
                        {searchResults.posts.map((result: any, index: number) => {
                                return (
                                    <PostPreview key={result.slug} hidePreview={true} {...result} isSearch={true} />
                                )
                        })}
                    </div>
                    }
                    {searchResults.posts.length === 0 && searchResults.projects.length == 0 && search.length > 0 && <div style={{ display: 'flex', backgroundColor: 'var(--background)', flexDirection: 'column', gap: '1rem', padding: '2rem 0.5rem 1rem 0.5rem', margin: '-1rem 0 0 0', borderRadius: '0.5rem' }}>
                    No results to display.</div>}
                </div>
            </div>
            }
        </>
    )
}

export default SearchModal
