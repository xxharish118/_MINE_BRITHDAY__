import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'
import { secret } from '../config'

export default function Secret() {
  const [shown, setShown] = useState(false)
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <motion.div animate={{ scale: shown ? 1.15 : [1, 1.1, 1] }} transition={{ repeat: shown ? 0 : Infinity, duration: 1.8 }}
        className="drop-shadow-[0_0_50px_rgba(212,175,55,.7)]">
        <Heart className="h-40 w-40 text-gold sm:h-56 sm:w-56" strokeWidth={1} fill="url(#g)" />
        <svg width="0" height="0"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f6e7a6" /><stop offset=".5" stopColor="#D4AF37" /><stop offset="1" stopColor="#8a6d17" /></linearGradient></defs></svg>
      </motion.div>
      <p className="font-script mt-10 text-3xl text-cream sm:text-5xl">There's One More Thing I Want You To Know...</p>
      <AnimatePresence mode="wait">
        {!shown ? (
          <motion.button key="b" exit={{ opacity: 0, scale: .9 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: .96 }} onClick={() => setShown(true)}
            className="font-display mt-10 rounded-full border border-gold bg-gold/10 px-8 py-3 text-sm tracking-[.25em] text-gold hover:bg-gold hover:text-rich">
            CLICK FOR A SECRET ❤️
          </motion.button>
        ) : (
          <motion.div key="m" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }}
            className="glass relative mt-10 max-w-xl rounded-lg p-8 sm:p-10">
            {Array.from({ length: 14 }).map((_, i) => (
              <motion.span key={i} initial={{ opacity: 1, x: 0, y: 0, scale: .6 }}
                animate={{ opacity: 0, x: (Math.random() - .5) * 460, y: -120 - Math.random() * 260, scale: 1.2 }}
                transition={{ duration: 2.4 + Math.random(), delay: i * .08 }} className="pointer-events-none absolute left-1/2 top-1/2 text-xl">❤️</motion.span>
            ))}
            <p className="relative text-xl italic leading-relaxed text-cream sm:text-2xl">{secret}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
