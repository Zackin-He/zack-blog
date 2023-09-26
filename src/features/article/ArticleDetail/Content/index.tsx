
import React from 'react'
import { connect } from 'react-redux';
import ReactMarkdown, { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw'; // 支持markdown渲染原始的HTML标签
import classNames from 'classnames';
import { storeState } from "@/store/interface";
import style from './index.module.scss'

interface Props {
  theme?: string,
  content: string
}


const ContentComponent: React.FC<Props> = ({ theme = 'dark', content }) => {
  // 代码高亮的renderers
  const renderers: Components = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    code ({ node ,inline, className, children, ...props }) {
      // 匹配code标签的类名，匹配成功说明是代码块，否则是高亮关键字
      const match = /language-(\w+)/.exec(className || '')
      return (!inline && match ?
        <SyntaxHighlighter
          {...props}
          style={ theme === 'dark' ? dracula : coy }
          language={match[1]}
          customStyle={{backgroundColor: 'transparent'}}
          className='text-[16px]'
        >
          {String(children)}
        </SyntaxHighlighter>
        :
        <code {...props} className={className}>
          {children}
        </code>
      )
    }
  };
  return (
    <div className={classNames(style.markdown,'prose max-w-none',style.layoutCard)}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw as never]}
        components={renderers}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

const ContentStoreComponent = connect(
  (state: storeState) => ({
    theme: state.theme
  }),
)(ContentComponent);

const ContentMemoComponent = React.memo<Props>(ContentStoreComponent);

export default ContentMemoComponent;