import { NextPage } from 'next';
import { getMetadata } from '../components/data';
import PostPreview from '@/app/components/PostPreview';
import BreadcrumbTrail from '../components/BreadcrumbTrail';
import ItemCount from '../components/ItemCount';
import PageHeader from '../components/PageHeader';
import PostHeader from '../components/PostHeader';
import BorderLine from '../components/BorderLine';
import LeftSidebar from '../components/LeftSidebar';

export async function generateMetadata() {
  return {
    title: 'Posts | Zach Yarbrough',
    description: 'A collection of articles and technical deep-dives.',
  }
}

const BlogPage: NextPage = () => {

    const postMetadata = getMetadata('posts') || []
    const postPreviewsByYear: any = {} 

    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))

    const getYear = (post: any) => {
	return new Date(post.props.date).getFullYear()
    }

    for(let i = 0; i <= postPreviews.length - 1; i++) {
	const year = getYear(postPreviews[i])

	if (!postPreviewsByYear[year]) {
	    postPreviewsByYear[year] = [postPreviews[i]]
	} else { 
	    postPreviewsByYear[year].push(postPreviews[i])
	}
    }

    return (
	<>
	<LeftSidebar />
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <BreadcrumbTrail />
            <PageHeader>Posts</PageHeader>
            <ItemCount count={postPreviews.length} message='found.' />
	    {Object.keys(postPreviewsByYear).sort((keyA: string, keyB: string) => keyB - keyA)
		.map((year) => {
		return <div key={year}>
		    <PostHeader headerNumber={1.5}>{year}</PostHeader>
		    <ItemCount count={postPreviewsByYear[year].length} message='found.' />
		    <div>{postPreviewsByYear[year]}</div>
		</div>
	    })}
            <BorderLine />
        </div>
	</>
    )
}

export default BlogPage
