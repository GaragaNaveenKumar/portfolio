import Projects from "./Projects";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden
                 bg-gradient-to-br from-blue-50 via-green-50 to-orange-50"
    >
      {/* subtle decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 
                      bg-blue-200 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 
                      bg-orange-200 rounded-full blur-3xl opacity-40"></div>

      {/* Content */}
      <div className="relative text-center max-w-2xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text 
                           bg-gradient-to-r from-blue-600 to-green-600">
            Naveen
          </span>{" "}
          👋
        </h1>

        <p className="mt-5 text-2xl font-semibold text-blue-600">
          Full Stack Developer | React | Node.js
        </p>

        <p className="mt-4 text-lg text-slate-600">
          I build modern, scalable, and user-friendly web applications
          with clean design and efficient code.
        </p>

        <div className="mt-8 flex justify-center gap-6">

  <a
    href="#projects"
    className="px-7 py-3 rounded-full text-lg font-bold text-white
               bg-gradient-to-r from-blue-600 to-green-600
               hover:scale-105 transition-transform"
  >
    View Projects
  </a>

  <a
    href="#contact"
    className="px-7 py-3 rounded-full text-lg font-bold
               border-2 border-green-600 text-green-600
               hover:bg-green-50 transition"
  >
    Contact Me
  </a>

</div>

      </div>
    </section>
  );
}
