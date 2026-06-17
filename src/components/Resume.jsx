import React from 'react'
import MacWindows from './windows/MacWindows'

const Resume = () => {
  return (
    <MacWindows >
        <div className="resume-window">
            <iframe src="./resume.pdf" frameborder="0"></iframe>
        </div>
    </MacWindows>
  )
}

export default Resume