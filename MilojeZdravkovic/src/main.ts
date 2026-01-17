import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import Lenis from '@studio-freight/lenis'

/* Exported Lenis instance */
export const lenis = new Lenis({
  duration: 1.2,
  easing: (t: number) => 1 - Math.pow(1 - t, 3),
  lerp: 0.1,
  wheelMultiplier: 1,
  touchMultiplier: 1,
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

createApp(App).mount('#app')
