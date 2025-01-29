'use client'

import { createContext, useState } from 'react';

export const MetadataContext: any = createContext({
    post: [],
    setPostMetadata: (posts: any) => { },
    projec: [],
    setProjectMetadata: (projects: any) => { }
})

export const MetadataProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<any[]>([])
    const [projects, setProjects] = useState<any[]>([])

    return (
        <MetadataContext.Provider value={{
            posts: posts as never[],
            setPosts: setPosts as () => void,
            projects: projects as never[],
            setProjects: setProjects as () => void
        }}>
            {children}
        </MetadataContext.Provider>
    )
}
