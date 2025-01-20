export interface PostMetadata {
    headers: string[] | null
    title: string
    subtitle: string
    date: string
    tags: string[]
    slug: string
    timeToRead: number
    tableOfContents: Record<string, {
        text: string,
        subSections: string[]
    }>
    backlinks: string[]
}

export interface Post extends PostMetadata {
    content: string
}