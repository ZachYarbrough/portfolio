export interface PostMetadata {
    headers: string[] | null
    title: string
    subtitle: string
    date: string
    tags: string[]
    slug: string
    timeToRead: number
    backlinks: string[]
}

export interface Post extends PostMetadata {
    content: string
}