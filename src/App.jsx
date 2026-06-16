import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import { Rnd } from 'react-rnd'
import MacWindows from './components/windows/MacWindows'

const App = () => {
  return (
      <main>
        <Nav />
        <Dock />

       <MacWindows />
      </main>
  )
}

export default App