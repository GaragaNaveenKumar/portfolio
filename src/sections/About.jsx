import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6"
    >
      <div className="absolute top-24 right-24 w-72 h-72
                      bg-blue-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <p className="eyebrow text-center">Who I Am</p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-2 section-heading"
        >
          About Me
        </motion.h2>

        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          Final-year B.Tech CSE student blending full-stack engineering with
          a growing focus on agentic AI.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-14 items-start">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg leading-relaxed text-slate-300"
          >
            <p>
              I'm <span className="text-white font-semibold">Naveen</span>, a
              final-year{" "}
              <span className="text-blue-300 font-semibold">
                Computer Science
              </span>{" "}
              student at Pragati Engineering College, building scalable,
              production-style web applications with the{" "}
              <span className="text-white font-semibold">MERN stack</span>.
            </p>

            <p>
              I'm currently going deeper into{" "}
              <span className="text-white font-semibold">
                Agentic AI
              </span>{" "}
              — learning LangChain and LangGraph to build agents with tool
              use, memory, and multi-step reasoning, and studying{" "}
              <span className="text-white font-semibold">
                Retrieval-Augmented Generation (RAG)
              </span>{" "}
              pipelines to connect LLMs with external knowledge sources.
            </p>

            <p>
              I actively practice{" "}
              <span className="text-white font-semibold">
                data structures, algorithms, and system design fundamentals
              </span>
              , which shows up in my{" "}
              <span className="text-white font-semibold">
                Top 1% LeetCode
              </span>{" "}
              ranking with 1,500+ problems solved and a 2,100+ contest
              rating.
            </p>

            <p>
              I'm driven by curiosity and continuous learning, and I'm
              actively looking for SDE and internship opportunities where I
              can contribute to meaningful, real-world products.
            </p>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Key Highlights
            </h3>

            <ul className="space-y-4 text-slate-300 text-base">
              <li>• B.Tech CSE — CGPA 8.33/10, Pragati Engineering College</li>
              <li>• Shipped full-stack MERN apps: MealCart, civic-tech reporting platform</li>
              <li>• Building AI agents with LangChain, LangGraph &amp; RAG basics</li>
              <li>• Open-source contributor — GirlScript Summer of Code 2025</li>
              <li>• Top 1% on LeetCode · 1,500+ problems · 2,100+ rating</li>
              <li>• Actively seeking SDE / internship opportunities</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
