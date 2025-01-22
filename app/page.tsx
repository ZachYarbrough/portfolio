import { NextPage } from 'next';
import ExternalLink from './components/ExternalLink';
import { getMetadata } from './components/data';
import PostPreview from './components/PostPreview';
import PageHeader from './components/PageHeader';
import InternalLink from './components/InternalLInk';
import { ArrowRightIcon } from './components/assets/icons';

const HomePage: NextPage = () => {

  const postMetadata = getMetadata('posts', 5)

  const postPreviews = postMetadata.map((post) => (
      <PostPreview key={post.slug} {...post} />
  ))

  return (
    <div style={{
      maxWidth: '750px',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto'
    }}>
      <PageHeader noCopy={true}>Welcome!</PageHeader>      
      <p style={{ padding: '0.5rem 0' }}>My name is Zach.</p>
      <p style={{ padding: '0.5rem 0' }}>Currently, I am working as a <span className='font-bold'>Full-Stack Developer</span> at <ExternalLink href='https://www.ideaentity.com'>IdeaEntity</ExternalLink>.</p>
      <p style={{ padding: '0.5rem 0' }}>I'm based out of Texas.</p>
      <p style={{ padding: '0.5rem 0' }}>Currently Reading: <ExternalLink href='https://www.goodreads.com/book/show/44439415-god-emperor-of-dune?ac=1&from_search=true&qid=ACssZpWWrk&rank=1'>God Emperor of Dune - Frank Herbert</ExternalLink></p>

      <div className='flex justify-between'>
      </div>
      <div style={{margin: '1rem 0'}}>
        <PageHeader noCopy={true}>Recent Posts</PageHeader>
        <ul>
          {postPreviews}
          <InternalLink link='posts'>View More Posts <ArrowRightIcon /></InternalLink>
        </ul>
      </div>
    </div>
  )
}

export default HomePage