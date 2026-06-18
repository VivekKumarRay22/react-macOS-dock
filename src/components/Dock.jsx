import React from 'react'
import "./dock.scss"
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
const Dock = ({ windowsState, setWindowsState }) => {
  return (
    <footer className='dock'>
      <div onClick={() => { setWindowsState(state => ({ ...state, github: true })) }}
        className="icon github"><img src="/Dock-icons/github.svg" alt="" /></div>

      <div onClick={() => { window.open("https://calendar.google.com/","_blank") }}
        className="icon calender"><img src="/Dock-icons/calender.svg" alt="" /></div>

      <div onClick={() => { window.open("https://www.linkedin.com/in/vivek-kumar-ray-25082a226/", "_blank") }}
        className="icon link"><img src="/Dock-icons/link.svg" alt="" /></div>

      <div onClick={() => { window.open("mailto:@vivek@example.com", "_blank") }}
        className="icon mail"><img src="/Dock-icons/mail.svg" alt="" /></div>

      <div onClick={() => { setWindowsState(state => ({ ...state, note: true })) }}
        className="icon note"><img src="/Dock-icons/note.svg" alt="" /></div>

      <div onClick={() => { setWindowsState(state => ({ ...state, resume: true })) }}
        className="icon pdf"><img src="/Dock-icons/pdf.svg" alt="" /></div>

      <div onClick={() => { setWindowsState(state => ({ ...state, cli: true })) }}
        className="icon cli"><img src="/Dock-icons/cli.svg" alt="" /></div>

      <div onClick={() => { setWindowsState(state => ({ ...state, spotify: true })) }}
        className="icon spotify"><img src="/Dock-icons/spotify.svg" alt="" /></div>
    </footer>
  )
}

export default Dock