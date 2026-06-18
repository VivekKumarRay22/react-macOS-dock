import React, { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import { Rnd } from 'react-rnd'
import MacWindows from './components/windows/MacWindows'
import Github from './components/Github'
import Note from './components/Note'
import Resume from './components/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const App = () => {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  })

  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      {windowsState.github && <Github windowName="github"  setWindowsState={setWindowsState} />}
      {windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
      {windowsState.resume && <Resume windowName="resume" windowsState={windowsState} setWindowsState={setWindowsState} />}
      {windowsState.spotify && <Spotify windowName="spotify" windowsState={windowsState} setWindowsState={setWindowsState} />}
      {windowsState.cli && <Cli windowName="cli" windowsState={windowsState} setWindowsState={setWindowsState} />}
    </main>
  )
}

export default App