import { useState } from 'react';
import './App.css'
import GalaxyCard from './components/GalaxyCard'
import galaxys from "./db/galaxy.json"
import { getRandomElemet } from './utils/random.js'

const backgraunds=["bg1", "bg2","bg3","bg4"]

function App() {
  const [galaxy, setGalaxy] = useState(getRandomElemet(galaxys))
  const [currentBg, setCurrentBg] = useState(getRandomElemet(getRandomElemet(backgraunds)))

  return (
    <main className={`app ${currentBg}`}>
      <GalaxyCard galaxy={galaxy} setGalaxy={setGalaxy} setCurrentBg={setCurrentBg} backgraunds={backgraunds}/>
    </main>
  )
}

export default App
