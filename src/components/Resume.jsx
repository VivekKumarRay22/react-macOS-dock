import React from 'react'
import MacWindows from './windows/MacWindows'
import "./resume.scss"

const Resume = ({windowName, setWindowsState}) => {
  return (
    <MacWindows windowName={windowName} setWindowsState={setWindowsState} width='30vw' height='60vh'>
        <div className="resume-window">
            <embed src="./resume.pdf" frameborder="0"></embed>
        </div>
    </MacWindows>
  )
}

export default Resume