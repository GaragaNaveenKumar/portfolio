import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-[#0b0f1a]"
    >
      {/* subtle glow */}
      <div className="absolute top-24 right-24 w-72 h-72
                      bg-violet-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-white"
        >
          About Me
        </motion.h2>

        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          A short overview of my background, skills, and interests.
        </p>

        {/* Content */}
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
              I’m <span className="text-white font-semibold">Naveen</span>, a
              <span className="text-fuchsia-400 font-semibold">
                {" "}Full Stack Developer
              </span>{" "}
              with a strong interest in building scalable, high-quality web
              applications.
            </p>

            <p>
              My primary focus is on the{" "}
              <span className="text-white font-semibold">
                MERN stack
              </span>, where I enjoy working across both frontend and backend
              to deliver complete, production-ready solutions.
            </p>

            <p>
              I actively practice{" "}
              <span className="text-white font-semibold">
                data structures, algorithms, and system design fundamentals
              </span>{" "}
              to improve my problem-solving ability and write efficient code.
            </p>

            <p>
              I’m driven by curiosity, continuous learning, and the desire to
              work on meaningful products that create real impact.
            </p>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl
                       border border-white/10
                       rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Key Highlights
            </h3>

            <ul className="space-y-4 text-slate-300 text-base">
              <li>• Experience building full-stack MERN applications</li>
              <li>• Strong foundation in JavaScript & React</li>
              <li>• Regular DSA and problem-solving practice</li>
              <li>• Comfortable working in collaborative environments</li>
              <li>• Actively seeking SDE / Internship opportunities</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
