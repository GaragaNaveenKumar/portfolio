import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center
                 bg-[#0b0f1a] overflow-hidden"
    >
      
      <div className="absolute top-24 left-24 w-72 h-72
                      bg-violet-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-24 right-24 w-72 h-72
                      bg-cyan-500/20 rounded-full blur-3xl" />

      
      <div className="relative z-10 max-w-3xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Naveen Kumar
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-2xl md:text-3xl font-semibold
                     text-transparent bg-clip-text
                     bg-gradient-to-r from-violet-400 to-fuchsia-400"
        >
          Full Stack Developer (MERN)
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-slate-400"
        >
          I design and build scalable, user-centric web applications with
          clean architecture, modern UI, and reliable backend systems.
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl
                       font-semibold text-white
                       bg-gradient-to-r from-violet-500 to-fuchsia-500
                       shadow-lg shadow-fuchsia-500/30
                       hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-xl
                       font-semibold text-white
                       border border-white/20
                       hover:bg-white/10 transition"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
