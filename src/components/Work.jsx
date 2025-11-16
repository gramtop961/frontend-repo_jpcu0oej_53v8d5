import { motion } from 'framer-motion'

const works = [
  {
    title: 'Urban Flow',
    tag: 'Short Film',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Neon Verse',
    tag: 'Ad Campaign',
    img: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Quiet Moments',
    tag: 'Editorial',
    img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Selected work</h2>
        <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition">View services →</a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((w, i) => (
          <motion.article
            key={w.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={w.img} alt={w.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
            <div className="p-4">
              <p className="text-xs uppercase tracking-widest text-gray-500">{w.tag}</p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">{w.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
