import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div style={{
      maxWidth: '750px',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto'
    }}>
      <h1>Welcome!</h1>
      <p>My name is Zach Yarbrough</p>
      <p>Currently, I am working as a <span className='font-bold'>Full-Stack Developer</span> at <span className='font-bold'>IdeaEntity</span>.</p>
      <p>I'm based in Texas.</p>

      <div className='flex justify-between'>
      </div>
      <div>
        <h1>Recent Posts</h1>
        <ul>
        </ul>
      </div>
    </div>
  )
}

export default HomePage