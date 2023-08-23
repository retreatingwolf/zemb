import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const Note = ({src}) => {
  console.log(src)
  return (
    <>
      <ReactMarkdown children={src} remarkPlugins={[remarkGfm]}/>
    </>
  )
}

export default Note;
