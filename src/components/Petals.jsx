import { useMemo } from 'react'
// Floating rose petals (or golden dust when `gold`). Pure CSS animation = smooth & light.
export default function Petals({ count = 16, gold = false }) {
  const items = useMemo(() => Array.from({ length: count }, (_, i) => {
    const s = gold ? 3 + Math.random() * 4 : 10 + Math.random() * 10
    return { i, style: { left: `${Math.random() * 100}%`, width: s, height: gold ? s : s * 1.3,
      animationDuration: `${(gold ? 9 : 12) + Math.random() * 10}s`, animationDelay: `-${Math.random() * 20}s`, '--dx': `${-80 + Math.random() * 160}px` } }
  }), [count, gold])
  return items.map(p => <span key={p.i} className={`petal ${gold ? 'dust' : ''}`} style={p.style} />)
}
