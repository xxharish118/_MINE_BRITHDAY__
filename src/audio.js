import { music } from './config'
// One shared audio element. It starts only when she taps "OPEN YOUR SURPRISE" (a user action).
export const audio = new Audio(music.src)
audio.loop = true
audio.volume = 0.7
