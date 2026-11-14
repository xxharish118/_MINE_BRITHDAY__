import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Opening from './components/Opening'
import Hero from './components/Hero'
import Letter from './components/Letter'
import Gallery from './components/Gallery'
import Reasons from './components/Reasons'
import Secret from './components/Secret'
import Finale from './components/Finale'
import Petals from './components/Petals'
import MusicPlayer from './components/MusicPlayer'

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <AnimatePresence mode="wait">
      {!open ? <Opening key="o" onOpen={() => setOpen(true)} /> : (
        <motion.main key="m" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }}>
          <Petals count={16} />
          <Hero /><Letter /><Gallery /><Reasons /><Secret /><Finale />
          <MusicPlayer />
        </motion.main>
      )}
    </AnimatePresence>
  )
}
