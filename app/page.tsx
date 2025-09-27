import { NextPage } from 'next';
import ExternalLink from './components/ExternalLink';
import { getMetadata } from './components/data';
import PostPreview from './components/PostPreview';
import PageHeader from './components/PageHeader';
import PostHeader from './components/PostHeader';
import InternalLink from './components/InternalLInk';
import { ArrowRightIcon } from './components/assets/icons';
import BorderLine from './components/BorderLine';
import { skills } from './config';
import ProjectPreview from './components/ProjectPreview';
import LeftSidebar from './components/LeftSidebar';
import Experience from './components/Experience';
import { email, githubUrl, linkedInUrl } from './config'
import { LocationPinIcon } from './components/assets/icons';
import EmojiWave from './components/emoji-wave';

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
      <div> <PageHeader noCopy={true}>Welcome! <EmojiWave /></PageHeader></div>
	<div style={{ margin: '1rem 0', padding: '1rem', borderRadius: '0.5rem', backgroundColor: 'var(--secondary-light)', width: '100%' }}>
	<p style={{ padding: '0 0 0.5rem 0 ' }}>
	    I am a <span className='font-bold'>Full-Stack Developer</span> specializing in the MERN stack. I'm currently pursuing my <span className='font-bold'>Masters of Computer Science</span> at <span className='font-bold'>Rice University</span>.	
	</p>
	<p style={{display: 'flex', verticalAlign: 'start', padding: '0.5rem 0' }}><LocationPinIcon /> <span>Based out of Texas</span></p>
          <ul className='flex' style={{ gap: '1rem', padding: '0.5rem 0 0 0' }}>
	    <li>Contact Me:</li>
            <li><ExternalLink href={linkedInUrl}>LinkedIn</ExternalLink></li>
            <li><ExternalLink href={githubUrl}>Github</ExternalLink></li>
	    <li><ExternalLink isMail={true} href={email}>Email</ExternalLink></li>
        </ul>
      </div>
      <p style={{ padding: '0.5rem 0' }}>Check out my personal setup and workflow in my <ExternalLink href='https://github.com/ZachYarbrough/dotfiles'>dotfiles</ExternalLink> repo.</p>
      <p style={{ padding: '0.5rem 0' }}>Skills include:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: '0.5rem 0' }}>
          {skills.map((skill) => (
            <InternalLink key={skill} useBubbleStyle={true} href={`/tags/${skill}`}>#{skill}</InternalLink>
          ))}
        </div>
      <p style={{ padding: '0.5rem 0' }}>Currently Reading: <ExternalLink href='https://www.goodreads.com/book/show/17332218-words-of-radiance?from_search=true&from_srp=true&qid=HMqRZTCwfD&rank=1'>Words of Radiance - Brandon Sanderson</ExternalLink></p>

      <div className='flex justify-between'>
      </div>
      <div style={{ margin: '1rem 0', width: '100%' }}>
        <PostHeader headerNumber={1.5} noCopy={true}>Featured Projects</PostHeader>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {projectPreviews}
        </div>
          <InternalLink style={{ marginTop: '1rem' }} href='/projects'>View More Projects <ArrowRightIcon /></InternalLink>
      </div>
      <div style={{ margin: '1rem 0' }}> 
        <PostHeader headerNumber={1.5} noCopy={true}>Experience</PostHeader>
        <Experience />
      </div>
      <div style={{margin: '1rem 0'}}>
        <PostHeader headerNumber={1.5} noCopy={true}>Recent Posts</PostHeader>
        <div>
          {postPreviews}
          <InternalLink href='/posts'>View More Posts <ArrowRightIcon /></InternalLink>
        </div>
      </div>
    </div>
      <BorderLine />
    </>
  )
}

export default HomePage
