import React, { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import MacWindows from './windows/MacWindows'
import "./note.scss"

const Note = ({windowName, setWindowsState}) => {

  const [markdown, setMarkdown] = useState("")

  useEffect(() => {
    fetch("/note.txt")
      .then(res => res.text())
      .then(text => setMarkdown(text))
  }, [])


  return (
    <MacWindows windowName={windowName} setWindowsState={setWindowsState} width='40vw' height='60vh'>
      <div className="note-window">
        {markdown ? <SyntaxHighlighter language='typescript' style={docco}>
          {markdown}
        </SyntaxHighlighter> : <p>loading...</p>}
      </div>
    </MacWindows>
  )
}

export default Note