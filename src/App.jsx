import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import { Rnd } from 'react-rnd'
import MacWindows from './components/windows/MacWindows'
import Github from './components/Github'
import Note from './components/Note'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Note />

    </main>
  )
}

export default App