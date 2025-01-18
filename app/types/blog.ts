export interface PostMetadata {
    title: string
    subtitle: string
    date: string
    tags: string[]
    slug: string
    timeToRead: number
}

export interface Post extends PostMetadata {
    content: string
}