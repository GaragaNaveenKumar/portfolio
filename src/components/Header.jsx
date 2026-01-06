export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 
                       backdrop-blur-xl bg-slate-900/70 
                       border-b border-white/10">
      <div className="max-w-7xl mx-auto 
                      flex items-center justify-between 
                      px-10 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide 
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-violet-400 to-fuchsia-400">
          SamplePortfolio
        </h1>

        {/* Navigation */}
        <nav className="flex gap-12 text-lg font-semibold">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-slate-200 
                         hover:text-white transition group"
            >
              {item}
              {/* underline */}
              <span
                className="absolute left-0 -bottom-1 
                           w-0 h-[2px] 
                           bg-gradient-to-r from-violet-400 to-fuchsia-400
                           transition-all duration-300
                           group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-6 py-2 text-lg font-bold 
                     rounded-xl text-black
                     bg-gradient-to-r from-orange-400 to-amber-400
                     hover:scale-105 transition-transform"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
