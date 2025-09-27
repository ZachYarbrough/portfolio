import ExternalLink from "./ExternalLink"
import { email, githubUrl, linkedInUrl } from "../config"

const Footer = () => {
    return (
        <div className='text-sm text-muted-foreground h-20' style={{ maxWidth: '750px', margin: '1rem auto' }}>
          <p>Created and Maintained by <ExternalLink href='https://github.com/ZachYarbrough/portfolio'>Zach Yarbrough</ExternalLink></p>
          <ul className='flex' style={{ gap: '1rem', marginTop: '0.5rem' }}>
            <li><ExternalLink href={linkedInUrl}>LinkedIn</ExternalLink></li>
            <li><ExternalLink href={githubUrl}>Github</ExternalLink></li>
            <li><ExternalLink isMail={true} href={email}>Email</ExternalLink></li>
          </ul>  
        </div>
    )
}

export default Footer
