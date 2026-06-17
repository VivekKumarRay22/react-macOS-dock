import React, { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown"
import MacWindows from './windows/MacWindows'


const Note = () => {

  const [markdown, setMarkdown] = useState("")

  useEffect(() => {
    fetch("/note.txt")
      .then(res => res.text())
      .then(text => setMarkdown(text))
  }, [])


  return (
    <MacWindows>
      <div className="note-window">
        {markdown ? <ReactMarkdown>
          {markdown}
        </ReactMarkdown> : <p>loading...</p>}
      </div>
    </MacWindows>
  )
}

export default Note