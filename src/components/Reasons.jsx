import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { reasons } from '../config'

export default function Reasons() {
  return (
    <section className="px-5 py-28">
      <h2 className="gold-text font-script mb-16 text-center text-5xl sm:text-7xl">Why You Are Special</h2>
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => {
          const Icon = Icons[r.icon]
          return (
            <motion.article key={r.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: (i % 3) * .15, duration: .8 }} whileHover={{ y: -8, boxShadow: '0 0 40px rgba(212,175,55,.35)' }}
              className="glass rounded-lg p-8 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 text-gold shadow-[0_0_22px_rgba(212,175,55,.3)]">
                <Icon className="h-7 w-7" strokeWidth={1.4} />
              </div>
              <h3 className="font-display mb-3 text-lg tracking-widest text-gold">{r.title}</h3>
              <p className="leading-relaxed text-cream/85">{r.text}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
