import { motion } from "framer-motion";

const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50
                 bg-black/80 backdrop-blur-2xl
                 border-b border-blue-400/15"
    >
      <div className="max-w-7xl mx-auto
                      flex items-center justify-between
                      px-6 md:px-10 py-4">

        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="font-display text-2xl md:text-3xl font-bold
                     tracking-wide text-transparent bg-clip-text
                     bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600"
        >
          Naveen.dev
        </motion.a>

        {/* Navigation */}
        <nav className="hidden md:flex gap-9 text-[15px] font-medium">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="group relative text-slate-300 hover:text-white transition"
            >
              {item}

              {/* Shining underline */}
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0
                           bg-blue-400
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
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="glass-btn relative px-6 py-2 text-sm md:text-base
                     bg-blue-600 border border-blue-400/40
                     shadow-[0_0_24px_-4px_rgba(59,130,246,0.6)]
                     overflow-hidden"
        >
          <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />
          Resume
        </motion.a>
      </div>
    </motion.header>
  );
}
