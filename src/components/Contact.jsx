import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending…')
    try {
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks — I\'ll get back to you soon!')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong.')
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Let’s work together</h2>
        <p className="mt-2 max-w-2xl text-gray-600">Tell me about your project — timeline, goals, budget — and I’ll reply with a direction that fits.</p>
      </div>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={onSubmit}
        className="grid grid-cols-1 gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2"
      >
        <input required name="name" placeholder="Name" className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900/10" />
        <input required name="email" type="email" placeholder="Email" className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900/10" />
        <input name="company" placeholder="Company (optional)" className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900/10 md:col-span-2" />
        <textarea required name="message" rows="4" placeholder="Project details" className="md:col-span-2 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900/10" />
        <div className="md:col-span-2 flex items-center justify-between">
          <button className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors">Send message</button>
          <p className="text-sm text-gray-600">{status}</p>
        </div>
      </motion.form>
    </section>
  )
}
