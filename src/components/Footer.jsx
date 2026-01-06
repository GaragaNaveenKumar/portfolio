export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-green-50 to-orange-50
                       border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row 
                        items-center justify-between gap-6">

          {/* Brand */}
          <h2 className="text-2xl font-extrabold 
                         text-transparent bg-clip-text
                         bg-gradient-to-r from-blue-600 to-green-600">
            Naveen
          </h2>

          {/* Navigation */}
          <nav className="flex gap-8 text-lg font-semibold text-slate-700">
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="#about" className="hover:text-green-600 transition">
              About
            </a>
            <a href="#skills" className="hover:text-orange-600 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-purple-600 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-pink-600 transition">
              Contact
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-gradient-to-r 
                        from-blue-200 via-green-200 to-orange-200"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row 
                        items-center justify-between gap-4 text-slate-600">

          <p className="text-base font-medium">
            © {new Date().getFullYear()} Naveen. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex gap-6 text-xl">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition"
            >
              🐙
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 transition"
            >
              💼
            </a>
            <a
              href="mailto:email@example.com"
              className="hover:text-green-700 transition"
            >
              ✉️
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
