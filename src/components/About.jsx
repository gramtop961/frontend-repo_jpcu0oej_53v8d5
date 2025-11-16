import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="prose prose-zinc max-w-none"
        >
          <h2 className="mb-2 font-bold tracking-tight text-gray-900">Minimal. Intentional. Bold.</h2>
          <p className="text-gray-700">
            I’m a content creator focused on sleek visuals and purposeful storytelling. I blend cinematic framing, rhythmic cuts, and clean design to create work that feels modern and timeless.
          </p>
          <p className="text-gray-700">
            Available for campaigns, short-form content, product spots, and creative direction.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {["Direction", "Editing", "Color", "Motion"].map((k) => (
            <div key={k} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">Focus</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">{k}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
