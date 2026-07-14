export const EASE = [0.16, 1, 0.3, 1] as const

export const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } }
}

export const stagger = (delay = 0.1) => ({
  visible: { transition: { staggerChildren: delay } }
})

export const lineReveal = {
  hidden:  { y: '100%', opacity: 0 },
  visible: { y: '0%',   opacity: 1, transition: { duration: 0.9, ease: EASE } }
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1,   transition: { duration: 0.5, ease: EASE } }
}