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

  useEffect(() => {
    const timer = setTimeout(() => setShowGrid(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-[var(--drab-dark-brown)] text-[var(--lion)] font-sans overflow-x-hidden">

      {/* Intro Animation – Profile in center */}
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
              className="rounded-2xl shadow-lg w-[70%] md:max-w-[50%] h-auto object-contain"
              initial={{ scale: 1.8 }}
              animate={{ scale: 1, y: -100 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bento Grid appears after intro */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-10 min-h-screen"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {/* Intro Section */}
            <motion.div {...fadeUp} className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-[var(--lion)] text-[var(--drab-dark-brown)] hover:scale-[1.02] hover:rotate-[1deg] transition-transform duration-200 ease-out">
              <h1 className="text-2xl md:text-3xl font-bold">Hi, I'm Sneha Michelle.</h1>
              <p className="mt-2 text-base md:text-lg">
                I'm a software engineer with a creative soul — passionate about <span className="text-[var(--olive)] font-semibold">NLP</span>, beautiful UIs, and expressive web experiences.<br />
                I love building tools that feel personal. I'm currently exploring creative NLP, vector embeddings, and visual storytelling using code.
              </p>
            </motion.div>

            {/* Profile Image */}
            <motion.div {...fadeUp} className="rounded-2xl overflow-hidden shadow-md border-2 border-[var(--olive)] bg-[var(--dun)] hover:scale-[1.02] transition-transform duration-200 ease-out">
              <img src="/me2.jpg" className="object-cover h-full w-full" alt="Profile" />
            </motion.div>

            {/* Featured Project */}
            <motion.div {...fadeUp} className="p-4 rounded-2xl bg-[var(--drab-dark-brown-2)] text-[var(--lion)] hover:scale-[1.02] transition-transform duration-200 ease-out">
              <h2 className="font-semibold text-xl text-[var(--lion)]">Featured Project</h2>
              <p className="mt-1 text-sm md:text-base">Real-time sentiment analyzer using HuggingFace & Streamlit.</p>
            </motion.div>

            {/* NLP Playground */}
            <motion.div {...fadeUp} className="p-4 rounded-2xl bg-[var(--olive)] text-[var(--drab-dark-brown)] hover:scale-[1.02] transition-transform duration-200 ease-out">
              <h3 className="font-semibold text-lg">🤖 NLP Playground</h3>
              <p className="text-sm mt-2">Try a mini GPT-2 poetry generator or mood-based quote machine.</p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div {...fadeUp} className="p-4 rounded-2xl bg-[var(--lion)] text-[var(--drab-dark-brown)] hover:scale-[1.02] transition-transform duration-200 ease-out">
              <h2 className="font-semibold text-xl">Tech Stack</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Next.js", "Tailwind", "HuggingFace", "Framer Motion"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-[var(--alabaster)] text-[var(--dark-moss-green)] px-3 py-1 rounded-full text-sm hover:bg-[var(--olive)] hover:text-[var(--drab-dark-brown)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Blog & Writing */}
            <motion.div {...fadeUp} className="p-6 rounded-2xl bg-[var(--olive)] text-[var(--drab-dark-brown)] hover:scale-[1.02] transition-transform duration-200 ease-out">
              <h2 className="font-semibold text-xl">Writing & Thoughts</h2>
              <ul className="mt-2 space-y-2 text-sm md:text-base">
                <li>
                  <a href="#" className="hover:text-[var(--lion)]">Why NLP is a Creative Act</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--lion)]">Making the Web Feel Human Again</a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Block */}
            <motion.div {...fadeUp} className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-[var(--drab-dark-brown-2)] text-[var(--lion)] hover:scale-[1.01] transition-transform duration-200 ease-out">
              <h2 className="text-xl font-semibold">Get in touch</h2>
              <p className="mt-1 text-sm md:text-base">Let’s collaborate or chat about LLMs, creative code, or good coffee.</p>
              <div className="mt-4 space-x-4 text-sm">
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
