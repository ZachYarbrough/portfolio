import { NextPage } from 'next';
import ExternalLink from './components/ExternalLink';
import { getMetadata } from './components/data';
import PostPreview from './components/PostPreview';
import PageHeader from './components/PageHeader';
import InternalLink from './components/InternalLInk';
import { ArrowRightIcon } from './components/assets/icons';
import BorderLine from './components/BorderLine';
import { skills } from './config';
import ProjectPreview from './components/ProjectPreview';
import LeftSidebar from './components/LeftSidebar';

export async function generateMetadata() {
  return {
    title: 'Zach Yarbrough | Software Developer',
    description: 'Full stack engineer with expertise in React, TypeScript, and cloud-native applications. Zachary Yarbrough has delivered mission-critical solutions for government and enterprise clients, combining technical depth with a focus on performance and maintainability.',
  }
}

const HomePage: NextPage = () => {
  
  const postMetadata = getMetadata('posts', 5)
  const projectMetadata = getMetadata('projects')
  const featuredProjectMetadata = projectMetadata.filter((project: any) => project.featured).slice(0, 3)

  const postPreviews = postMetadata.map((post) => (
      <PostPreview key={post.slug} {...post} />
  ))

  const projectPreviews = featuredProjectMetadata.map((project) => (
      <ProjectPreview key={project.slug} {...project} />
  ))

  return (
    <>
    <LeftSidebar />
    <div style={{
      maxWidth: '750px',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto'
    }}>
      <PageHeader noCopy={true}>Welcome!</PageHeader>      
      <p style={{ padding: '0.5rem 0' }}>My name is Zach.</p>
      <p style={{ padding: '0.5rem 0' }}>I am a <span className='font-bold'>Full-Stack Developer</span> that specializes in the <span className='font-bold'>MERN</span> stack.</p>
      <p style={{ padding: '0.5rem 0' }}>Based out of Texas.</p>
      <p style={{ padding: '0.5rem 0' }}>Skills include:</p>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: '0.5rem 0' }}>
          {skills.map((skill) => (
            <InternalLink key={skill} useBubbleStyle={true} href={`/tags/${skill}`}>#{skill}</InternalLink>
          ))}
        </ul>
      <p style={{ padding: '0.5rem 0' }}>Currently Reading: <ExternalLink href='https://www.goodreads.com/book/show/17332218-words-of-radiance?from_search=true&from_srp=true&qid=HMqRZTCwfD&rank=1'>Words of Radiance - Brandon Sanderson</ExternalLink></p>

      <div className='flex justify-between'>
      </div>
      <div style={{ margin: '1rem 0', width: '100%' }}>
        <PageHeader noCopy={true}>Featured Projects</PageHeader>
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {projectPreviews}
        </ul>
          <InternalLink style={{ marginTop: '1rem' }} href='/projects'>View More Projects <ArrowRightIcon /></InternalLink>
      </div>
      <div style={{margin: '1rem 0'}}>
        <PageHeader noCopy={true}>Recent Posts</PageHeader>
        <ul>
          {postPreviews}
          <InternalLink href='/posts'>View More Posts <ArrowRightIcon /></InternalLink>
        </ul>
      </div>
    </div>
      <BorderLine />
    </>
  )
}

export default HomePage
