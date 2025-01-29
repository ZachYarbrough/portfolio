export interface PostMetadata {
    headers: string[] | null
    title: string
    description: string
    date: string
    tags: string[]
    slug: string
    timeToRead: number
    tableOfContents: Record<string, {
        text: string,
        subSections: string[]
    }>,
    related: string[]
    backlinks: {
        title: string
        backlink: string
    }[]
}

export interface Post extends PostMetadata {
    content: string
}

export interface Project extends PostMetadata {
    content: string
    source: string
    live: string
    preview: string
}
