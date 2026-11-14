import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { letter } from '../config'

export default function Letter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: .35 })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const t = setInterval(() => setN(v => (v >= letter.length ? (clearInterval(t), v) : v + 1)), 38)
    return () => clearInterval(t)
  }, [inView])
  return (
    <section id="letter" className="px-5 py-28">
      <h2 className="gold-text font-script mb-12 text-center text-5xl sm:text-7xl">A Letter From My Heart...</h2>
      <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
        className="glass relative mx-auto max-w-2xl rounded-sm p-8 sm:p-14">
        <span className="absolute inset-2 border border-gold/25" />
        <p className="relative min-h-[26rem] whitespace-pre-wrap text-xl leading-9 text-cream sm:text-2xl sm:leading-10">
          {letter.slice(0, n)}
          {n < letter.length && <span className="ml-0.5 inline-block h-6 w-px animate-pulse bg-gold align-middle" />}
        </p>
      </motion.div>
    </section>
  )
}
