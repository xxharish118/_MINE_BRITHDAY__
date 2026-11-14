import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function Fireworks() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, x = c.getContext('2d'); let raf, parts = [], t = 0
    const size = () => { c.width = c.offsetWidth; c.height = c.offsetHeight }; size(); window.addEventListener('resize', size)
    const burst = () => {
      const cx = c.width * (.15 + Math.random() * .7), cy = c.height * (.1 + Math.random() * .45)
      for (let i = 0; i < 70; i++) { const a = Math.random() * 6.283, s = 1 + Math.random() * 4
        parts.push({ x: cx, y: cy, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, hue: Math.random() < .75 ? 46 : 348 }) }
    }
    const loop = () => {
      x.globalCompositeOperation = 'destination-out'; x.fillStyle = 'rgba(0,0,0,.18)'; x.fillRect(0, 0, c.width, c.height)
      x.globalCompositeOperation = 'lighter'
      if (++t % 55 === 0) burst()
      parts = parts.filter(p => p.life > 0)
      parts.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += .04; p.vx *= .985; p.life -= .014
        x.fillStyle = `hsla(${p.hue},85%,60%,${p.life})`; x.beginPath(); x.arc(p.x, p.y, 2, 0, 6.283); x.fill() })
      raf = requestAnimationFrame(loop)
    }
    burst(); loop()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', size) }
  }, [])
  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full" />
}

export default function Finale() {
  return (
    <section className="bg-cinema relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-28 text-center">
      <Fireworks />
      <motion.h2 initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.6 }}
        className="gold-text font-display relative text-3xl leading-snug sm:text-6xl">
        ONCE AGAIN, HAPPY BIRTHDAY<br />PAVITHARA ❤️
      </motion.h2>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .8, duration: 1.4 }}
        className="glass relative mt-12 max-w-xl rounded-lg p-8 text-xl leading-relaxed sm:p-10 sm:text-2xl">
        <p>May your life be filled with beautiful opportunities, endless smiles, peaceful days and dreams coming true.</p>
        <p className="mt-6 italic text-gold">Never stop smiling.<br />Never stop dreaming.<br />Always stay the beautiful person you are.</p>
        <p className="font-script mt-8 text-4xl text-cream">With lots of love ❤️</p>
      </motion.div>
    </section>
  )
}
