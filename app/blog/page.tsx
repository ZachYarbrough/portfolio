import { NextPage } from "next";
import { getPostMetadata } from "../components/blog";
import PostPreview from "../components/PostPreview";

const BlogPage: NextPage = () => {

    const postMetadata = getPostMetadata()
    console.log(postMetadata)

    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))
    return (
        <div>
                <h1 className="text-3xl font-bold underline">
                Hello World</h1>
            <div>{postPreviews}</div>
        </div>
    )
}

export default BlogPage