import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

      <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-7xl flex-col items-start justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl"
        >
          Bold content that moves people
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-xl text-base text-gray-700 sm:text-lg"
        >
          I craft high-impact videos, campaigns, and digital stories for brands who want a clean, modern aesthetic with a futuristic edge.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#work" className="pointer-events-auto rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-gray-800 transition-colors">See work</a>
          <a href="#contact" className="pointer-events-auto rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">Contact</a>
        </motion.div>
      </div>
    </section>
  )
}
