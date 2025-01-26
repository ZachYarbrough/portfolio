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

const HomePage: NextPage = () => {

  const postMetadata = getMetadata('posts', 5)
  const projectMetadata = getMetadata('projects')

  // Should this be more dynamic? It probably would be good to come back and see if this could be better?
  const featuredProject = ['10k-cards', 'weather-dashboard', 'reploy']

  const postPreviews = postMetadata.map((post) => (
      <PostPreview key={post.slug} {...post} />
  ))

  const projectPreviews = projectMetadata.filter((project) => featuredProject.includes(project.slug)).map((project, index) => (
      <ProjectPreview key={project.slug} isOdd={index % 2 === 0} {...project} />
  ))

  return (
    <>
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
      <p style={{ padding: '0.5rem 0' }}>Skills include:</p>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: '0.5rem 0' }}>
          {skills.map((skill) => (
            <InternalLink key={skill} useBubbleStyle={true} href={`/tags/${skill}`}>#{skill}</InternalLink>
          ))}
        </ul>
      <p style={{ padding: '0.5rem 0' }}>Currently Reading: <ExternalLink href='https://www.goodreads.com/book/show/44439415-god-emperor-of-dune?ac=1&from_search=true&qid=ACssZpWWrk&rank=1'>God Emperor of Dune - Frank Herbert</ExternalLink></p>

      <div className='flex justify-between'>
      </div>
      <div style={{ margin: '1rem 0', width: '100%' }}>
        <PageHeader noCopy={true}>Featured Projects</PageHeader>
        <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
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