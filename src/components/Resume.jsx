import React from 'react'
import MacWindows from './windows/MacWindows'
import "./resume.scss"

const Resume = () => {
  return (
    <MacWindows width='30vw' height='60vh'>
        <div className="resume-window">
            <embed src="./resume.pdf" frameborder="0"></embed>
        </div>
    </MacWindows>
  )
}

export default Resume