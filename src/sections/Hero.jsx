import { motion } from "framer-motion";
import HeroScene from "../components/HeroScene";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center
                 overflow-hidden"
    >
      {/* Ambient blue glows */}
      <div className="absolute top-24 left-24 w-72 h-72
                      bg-blue-600/15 rounded-full blur-3xl" />
      <div className="absolute bottom-24 right-24 w-72 h-72
                      bg-blue-500/15 rounded-full blur-3xl" />

      {/* 3D lattice — graph structure, a nod to DSA + agent/tool networks */}
      <div className="absolute inset-0 z-0 opacity-90">
        <HeroScene />
      </div>

      <div className="relative z-10 max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Final-Year B.Tech CSE · Open to SDE Roles & Internships
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 font-display text-5xl md:text-6xl font-bold text-white leading-tight"
        >
          Naveen Kumar Garaga
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-4 text-2xl md:text-3xl font-semibold gradient-text"
        >
          Full Stack Developer (MERN) &amp; Agentic AI Builder
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-6 text-lg md:text-xl text-slate-400"
        >
          I build scalable full-stack web applications and I'm learning to
          build AI agents with LangChain, LangGraph, and RAG — backed by
          competitive-programming fundamentals (Top 1% on LeetCode, 1,500+
          problems solved).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          <a
            href="#projects"
            className="glass-btn px-8 py-3
                       bg-blue-600 border border-blue-400/40
                       shadow-[0_0_24px_-4px_rgba(59,130,246,0.6)]
                       hover:bg-blue-500 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="glass-btn px-8 py-3
                       border border-blue-400/30 text-white
                       hover:bg-blue-500/10 transition"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
