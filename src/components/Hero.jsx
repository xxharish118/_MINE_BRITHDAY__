import { motion } from 'framer-motion'
import { Heart, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-cinema relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div animate={{ scale: [1, 1.12, 1] }} transition={{ repeat: Infinity, duration: 2.4 }}
        className="mb-8 drop-shadow-[0_0_30px_rgba(212,175,55,.8)]">
        <Heart className="h-14 w-14 text-gold" fill="currentColor" />
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1.8 }}
        className="gold-text font-display text-5xl leading-tight sm:text-7xl lg:text-8xl">
        HAPPY BIRTHDAY<br />MY PAVITHARA ❤️
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1.6 }}
        className="mt-8 max-w-xl text-xl italic leading-relaxed text-cream/85 sm:text-2xl">
        Today, the world celebrates your birthday, but I celebrate the beautiful blessing of having you in my life.
      </motion.p>
      <motion.a href="#letter" aria-label="Scroll down" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-gold"><ChevronDown className="h-8 w-8" /></motion.a>
    </section>
  )
}
