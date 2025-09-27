
import { NextPage } from 'next';
import PageHeader from './components/PageHeader';
import InternalLink from './components/InternalLInk';
import BorderLine from './components/BorderLine';
import LeftSidebar from './components/LeftSidebar';
import SearchBar from './components/SearchBar';

const NotFound: NextPage = () => {
    return (
	<>
	    <LeftSidebar />
	    <div style={{
		maxWidth: '750px',
		display: 'flex',
		flexDirection: 'column',
		margin: '0 auto'
	    }}>
		<PageHeader noCopy={true}>404 - Page Not Found</PageHeader>
		<p style={{ margin: '0.5rem 0' }}>Well… this is embarrassing — the page you were looking for seems to have drifted off into the digital ether! Return to the <InternalLink href={'/'} useBubbleStyle={true} >Home</InternalLink> page to continue exploring the site.</p>
		<p style={{ margin: '0.5rem 0.5rem 0.5rem 0' }}>Looking for something specific? Try using the search bar below to locate it.</p>
		<SearchBar width='100%'/>    
	    </div>
	    <BorderLine />
	</>
    )
}

export default NotFound
