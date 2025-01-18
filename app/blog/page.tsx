import { NextPage } from "next";
import Link from "next/link";
import { getPostMetadata } from "../components/blog";

const BlogPage: NextPage = () => {

    const postMetadata = getPostMetadata()
    console.log(postMetadata)

    const postPreviews = postMetadata.map((post) => (
        <div key={post.slug}>
            <Link href={`/blog/posts/${post.slug}`}>
                <h2>{post.title}</h2>
            </Link>
            <p>{post.date}</p>
        </div>
    ))
    return (
        <div>
            <h1>Hello World</h1>
            <div>{postPreviews}</div>
        </div>
    )
}

export default BlogPage