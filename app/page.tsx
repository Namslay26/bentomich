'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function BentoGrid() {
  const [showGrid, setShowGrid] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowGrid(true), 2000)
    return () => clearTimeout(timer)
  }, [])
  // change the colors based on dark or light mode


  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--text)] overflow-y-auto">
      {/* Intro Animation */}
      <AnimatePresence>
        {!showGrid && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <motion.img
              src="/me2.jpg"
              alt="Profile"
              className="rounded-2xl shadow-lg max-w-[50%] max-h-[50%] h-auto object-contain"
              initial={{ scale: 1.8 }}
              animate={{ scale: 1, y: -100 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bento Grid */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-10 min-h-screen"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } } }}
          >
            {/* Intro Section */}
            <motion.div {...fadeUp} className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-[var(--primary)] text-[var(--background)] hover:scale-[1.02] transition-transform duration-200 ease-out">
            <h1 className="text-3xl font-bold">Hi 👋, I'm Sneha Michelle</h1>
              <p className="mt-2 text-lg">
                Software Engineer | Creative Technologist<br /><br/>
                I’m a software engineer with a passion for <span className="text-[var(--storm)] font-semibold">NLP</span> and <span className="text-[var(--storm)] font-semibold">expressive design</span>.
                I love to explore the intersection of <span className="text-[var(--storm)] font-semibold">technology</span> and <span className="text-[var(--storm)] font-semibold">art</span>, creating experiences that are both functional and beautiful.
                I craft expressive experiences around <span className="text-[var(--storm)] font-semibold">Generative AI</span>, ML, and <span className="text-[var(--storm)] font-semibold">NLP</span>. From full-stack web to CI/CD to animations, I weave ideas into code. I also run a small biz & draw on Procreate ✨.
              </p>
            </motion.div>

            {/* Profile Image */}
            <motion.div {...fadeUp} className="rounded-2xl overflow-hidden shadow-md border-2 border-[var(--accent)] bg-[var(--card-bg)] hover:scale-[1.02] transition-transform duration-200 ease-out">
              <img src="/me2.jpg" className="object-cover h-full w-full" alt="Profile" />
            </motion.div>

            {/* Featured Project */}
            <motion.div {...fadeUp} className="p-4 rounded-2xl bg-[var(--surface)] text-[var(--text)] hover:scale-[1.02] transition-transform duration-200 ease-out">
              <h2 className="font-semibold text-xl">🚀 Featured Project</h2>
              <p className="mt-1">Sentiment analyzer with HuggingFace + Streamlit – real-time feedback, visual results.</p>
            </motion.div>

            {/* NLP Playground */}
            <motion.div {...fadeUp} className="p-4 rounded-2xl bg-[var(--accent)] text-[var(--background)] hover:scale-[1.02] transition-transform duration-200 ease-out">
              <h3 className="font-semibold text-lg">🤖 NLP Playground</h3>
              <p className="text-sm mt-2">Test GPT-2 poetry & mood-based quote generator. Built for fun & wonder.</p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div {...fadeUp} className="p-4 rounded-2xl bg-[var(--primary)] text-[var(--background)] hover:scale-[1.02] transition-transform duration-200 ease-out">
              <h2 className="font-semibold text-xl">🧰 Tech Stack</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Next.js", "Tailwind", "HuggingFace", "Framer Motion"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-[var(--secondary)] text-[var(--background)] px-3 py-1 rounded-full text-sm hover:bg-[var(--highlight)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Writing */}
            <motion.div {...fadeUp} className="p-6 rounded-2xl bg-[var(--accent)] text-[var(--background)] hover:scale-[1.02] transition-transform duration-200 ease-out">
              <h2 className="font-semibold text-xl">✍️ Writing & Thoughts</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-[var(--highlight)]">NLP as a Creative Act</a></li>
                <li><a href="#" className="hover:text-[var(--highlight)]">Making the Web Feel Human</a></li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div {...fadeUp} className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-[var(--surface)] text-[var(--text)] hover:scale-[1.01] transition-transform duration-200 ease-out">
              <h2 className="text-xl font-semibold">📬 Get in touch</h2>
              <p className="mt-1">Let's talk LLMs, cool ideas, or collab on your next creative build.</p>
              <div className="mt-4 space-x-4">
                <a href="mailto:michpelled@gmail.com" className="hover:underline">📧 Email</a>
                <a href="https://github.com/Namslay26" className="hover:underline">💻 GitHub</a>
                <a href="https://www.linkedin.com/in/sneha-michelle-vimal-1b73b0213/" className="hover:underline">🔗 LinkedIn</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
