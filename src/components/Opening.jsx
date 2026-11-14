import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Petals from './Petals'
import { audio } from '../audio'

export default function Opening({ onOpen }) {
  const [opening, setOpening] = useState(false)
  const go = () => { if (opening) return; setOpening(true); audio.play().catch(() => {}); setTimeout(onOpen, 2400) }
  return (
    <motion.section exit={{ opacity: 0, scale: 1.08 }} transition={{ duration: 1.2 }}
      className="bg-cinema fixed inset-0 z-40 flex flex-col items-center justify-center px-6 text-center">
      <Petals gold count={28} />
      <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4, duration: 1.4 }}
        className="font-script text-3xl text-cream/90 sm:text-4xl">To My Most Special Person...</motion.p>
      <motion.h1 initial={{ opacity: 0, letterSpacing: '.6em' }} animate={{ opacity: 1, letterSpacing: '.2em' }} transition={{ delay: 1, duration: 2 }}
        className="gold-text font-display mt-3 text-4xl sm:text-6xl">PAVITHARA ❤️</motion.h1>
      <p className="mt-4 italic text-cream/80">I made something special just for you.</p>

      {/* Envelope */}
      <div className="relative mt-12 h-[200px] w-[290px] sm:h-[250px] sm:w-[370px]" style={{ perspective: 900 }}>
        <div className="absolute inset-0 rounded-md border border-gold/60 bg-gradient-to-br from-royal to-burgundy shadow-[0_0_60px_rgba(212,175,55,.25)]" />
        <motion.div animate={opening ? { y: -120 } : { y: 0 }} transition={{ delay: .9, duration: 1.2 }}
          className="absolute inset-x-4 bottom-3 top-4 flex items-center justify-center rounded bg-cream shadow-lg">
          <span className="font-script text-2xl text-royal">For Pavithara ❤️</span>
        </motion.div>
        <div className="absolute inset-0 rounded-md border border-gold/40 bg-gradient-to-t from-royal to-[#5a0016]"
          style={{ clipPath: 'polygon(0 30%, 50% 62%, 100% 30%, 100% 100%, 0 100%)' }} />
        <motion.div animate={{ rotateX: opening ? 180 : 0 }} transition={{ duration: 1, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top', clipPath: 'polygon(0 0,100% 0,50% 100%)', zIndex: opening ? 0 : 30 }}
          className="absolute inset-x-0 top-0 h-[62%] bg-gradient-to-b from-[#a8841f] via-gold to-[#f6e7a6]" />
        <motion.div animate={{ opacity: opening ? 0 : 1, scale: opening ? .4 : 1 }} transition={{ duration: .5 }}
          className="absolute left-1/2 top-[62%] z-40 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#d4153f] to-royal shadow-[0_0_24px_rgba(212,21,63,.7)] ring-2 ring-gold">
          <Heart className="h-6 w-6 text-gold" fill="currentColor" />
        </motion.div>
      </div>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: .96 }} onClick={go} disabled={opening}
        className="font-display mt-14 rounded-full border border-gold bg-gold/10 px-8 py-3 text-sm tracking-[.3em] text-gold shadow-[0_0_30px_rgba(212,175,55,.25)] transition hover:bg-gold hover:text-rich">
        OPEN YOUR SURPRISE
      </motion.button>
    </motion.section>
  )
}
