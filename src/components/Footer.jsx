import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0f1a] border-t border-white/10">
      
      {/* subtle top glow line */}
      <div className="absolute inset-x-0 top-0 h-px
                      bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row
                        items-center justify-between gap-6">

          {/* Brand */}
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-xl font-extrabold
                       text-transparent bg-clip-text
                       bg-gradient-to-r from-violet-400 to-fuchsia-400"
          >
            Naveen.dev
          </motion.h2>

          {/* Navigation */}
          <nav className="flex gap-8 text-sm font-medium text-slate-400">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row
                        items-center justify-between gap-4
                        text-sm text-slate-400">

          <p>
            © {new Date().getFullYear()} Naveen Kumar. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-xl">
            <a
              href="https://github.com/GaragaNaveenKumar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:naveenkumargaraga@gmail.com"
              className="hover:text-fuchsia-400 transition"
              aria-label="Email"
            >
              <MdEmail />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
