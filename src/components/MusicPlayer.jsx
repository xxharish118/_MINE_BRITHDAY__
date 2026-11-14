import { useEffect, useState } from 'react'
import { Music, Pause, Play } from 'lucide-react'
import { music } from '../config'
import { audio } from '../audio'

export default function MusicPlayer() {
  const [on, setOn] = useState(!audio.paused)
  const [err, setErr] = useState(false)
  useEffect(() => {
    const p = () => setOn(true), s = () => setOn(false), e = () => setErr(true)
    audio.addEventListener('play', p); audio.addEventListener('pause', s); audio.addEventListener('error', e)
    return () => { audio.removeEventListener('play', p); audio.removeEventListener('pause', s); audio.removeEventListener('error', e) }
  }, [])
  const toggle = () => (audio.paused ? audio.play().catch(() => setErr(true)) : audio.pause())
  return (
    <div className="glass fixed bottom-4 right-4 z-40 flex items-center gap-3 rounded-full py-2 pl-4 pr-2">
      <Music className={`h-4 w-4 text-gold ${on ? 'animate-pulse' : ''}`} />
      <span className="font-display text-xs tracking-widest text-cream/80">{err ? 'Music not found' : music.title}</span>
      <button onClick={toggle} aria-label={on ? 'Pause music' : 'Play music'}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-rich">{on ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}</button>
    </div>
  )
}
