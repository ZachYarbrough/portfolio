'use client';

import Markdown from 'markdown-to-jsx';
import CodeBlock from './CodeBlock';
import Paragraph from './Paragraph';
import PostHeader from './PostHeader';
import BlockQuote from './BlockQuote';
import BulletLists from './BulletLists';
import PostLink from './PostLink';
import Image from './Image';

const MarkdownRenderer = ({ content }: { content: string }) => {
    return (
        <Markdown options={{
            overrides: {
                code: { component: CodeBlock },
                a: { component: PostLink },
                p: { component: Paragraph },
                h1: { component: PostHeader, props: { headerNumber: 1.5 } },
                h2: { component: PostHeader, props: { headerNumber: 1.3 } },
                h3: { component: PostHeader, props: { headerNumber: 1.1 } },
                h4: { component: PostHeader, props: { headerNumber: 1 } },
                blockquote: { component: BlockQuote },
                ul: { component: BulletLists },
                img: { component: (props) => <Image src={props.src} alt={props.alt} imgStyle={{ width: '100%', height: '100%', borderRadius: '0.5rem', border: '1px solid var(--secondary-light)' }} /> }
            }
        }}>
            {content}
        </Markdown>
    );
};

export default MarkdownRenderer;
