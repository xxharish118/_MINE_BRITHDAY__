import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { photos } from '../config'

const tilt = [-2.5, 1.5, -1, 2.5]

function Tile({ p, i, onOpen }) {
  const [failed, setFailed] = useState(false)
  return (
    <motion.figure initial={{ opacity: 0, y: 40, rotate: tilt[i % 4] * 2 }} whileInView={{ opacity: 1, y: 0, rotate: tilt[i % 4] }}
      viewport={{ once: true, amount: .2 }} transition={{ duration: .9 }} whileHover={{ rotate: 0, scale: 1.04, zIndex: 5 }}
      onClick={() => !failed && onOpen(i)} className={`relative ${failed ? '' : 'cursor-zoom-in'}`}>
      <div className="gold-frame">
        <div className="relative aspect-[3/4] overflow-hidden bg-burgundy">
          {failed ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-burgundy to-rich p-4 text-center text-gold/80">
              <Camera className="h-9 w-9" /><span className="font-display text-xs tracking-widest">{p.src.split('/').pop()}</span>
              <span className="text-sm italic text-cream/60">A memory waiting to be added</span>
            </div>
          ) : (
            <img src={p.src} alt={p.caption} loading="lazy" onError={() => setFailed(true)}
              className="h-full w-full object-cover transition duration-700 hover:scale-110" />
          )}
        </div>
      </div>
      <figcaption className="font-script mt-4 text-center text-2xl text-cream/90">{p.caption}</figcaption>
    </motion.figure>
  )
}

export default function Gallery() {
  const [open, setOpen] = useState(null)
  const ok = i => (i + photos.length) % photos.length
  useEffect(() => {
    const k = e => { if (open === null) return; if (e.key === 'Escape') setOpen(null); if (e.key === 'ArrowRight') setOpen(ok(open + 1)); if (e.key === 'ArrowLeft') setOpen(ok(open - 1)) }
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [open])
  return (
    <section className="bg-gradient-to-b from-transparent via-burgundy/60 to-transparent px-5 py-28">
      <h2 className="gold-text font-script mb-4 text-center text-5xl sm:text-7xl">Our Beautiful Memories</h2>
      <p className="mb-16 text-center italic text-cream/70">Tap a photo to see it closer</p>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((p, i) => <Tile key={p.src} p={p} i={i} onOpen={setOpen} />)}
      </div>
      <AnimatePresence>
        {open !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-rich/95 p-4">
            <button aria-label="Close" className="absolute right-5 top-5 text-gold"><X className="h-8 w-8" /></button>
            <button aria-label="Previous" onClick={e => { e.stopPropagation(); setOpen(ok(open - 1)) }} className="absolute left-2 text-gold sm:left-8"><ChevronLeft className="h-10 w-10" /></button>
            <button aria-label="Next" onClick={e => { e.stopPropagation(); setOpen(ok(open + 1)) }} className="absolute right-2 text-gold sm:right-8"><ChevronRight className="h-10 w-10" /></button>
            <motion.figure key={open} initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} onClick={e => e.stopPropagation()} className="max-w-full">
              <div className="gold-frame"><img src={photos[open].src} alt={photos[open].caption} className="max-h-[78vh] max-w-full object-contain" /></div>
              <figcaption className="font-script mt-4 text-center text-3xl text-cream">{photos[open].caption}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
