import { motion } from "framer-motion";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50
                 bg-[#0b0f1a]/70 backdrop-blur-2xl
                 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto
                      flex items-center justify-between
                      px-6 md:px-10 py-4">

        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-2xl md:text-3xl font-extrabold
                     tracking-wide text-transparent bg-clip-text
                     bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400"
        >
          Naveen.dev
        </motion.h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 text-[16px] font-medium">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="relative text-slate-300 hover:text-white transition"
            >
              {item}

              {/* Shining underline */}
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0
                           bg-gradient-to-r from-violet-400 to-fuchsia-400
                           transition-all duration-300
                           group-hover:w-full"
              />
            </motion.a>
          ))}
        </nav>

        {/* Resume Button */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-6 py-2 text-sm md:text-base font-semibold
                     rounded-xl text-white
                     bg-gradient-to-r from-violet-500 to-fuchsia-500
                     shadow-lg shadow-fuchsia-500/30
                     overflow-hidden"
        >
          {/* Shine */}
          <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-10 transition" />
          Resume
        </motion.a>
      </div>
    </motion.header>
  );
}
