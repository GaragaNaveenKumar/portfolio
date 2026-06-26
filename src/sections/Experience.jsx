import { motion } from "framer-motion";
import Tilt3D from "../components/Tilt3D";

const experiences = [
  {
    role: "Open Source Contributor",
    org: "GirlScript Summer of Code",
    period: "Aug 2025 – Oct 2025 · Remote",
    points: [
      "Contributed to 5+ MERN stack open-source repositories, shipping bug fixes and new features reviewed by maintainers.",
      "Improved code quality and test coverage following Agile and clean coding standards.",
      "Reviewed peer pull requests and collaborated asynchronously with developers via Git/GitHub.",
    ],
  },
  {
    role: "Hackathon Participant — AI Teacher Assistant",
    org: "Google Solution Challenge 2024",
    period: "2024 · Team Project",
    points: [
      "Built an AI-powered Teacher Assistant chatbot using the Gemini API for personalized academic support.",
      "Implemented real-time doubt resolution, topic summarization, and adaptive learning guidance.",
      "Focused on education accessibility for students with limited access to quality tutoring.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="absolute top-20 right-20 w-72 h-72
                      bg-blue-500/15 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        <p className="eyebrow text-center">Where I've Worked</p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-2 section-heading"
        >
          Experience
        </motion.h2>

        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          Open-source contributions and a hackathon build, both grounded in
          shipping real, reviewed code.
        </p>

        <div className="mt-16 relative perspective-grid">
          {/* Timeline rail */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px
                          bg-gradient-to-b from-blue-600/70 via-blue-400/20 to-blue-300/40" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative md:w-1/2 ${
                  idx % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                } pl-12 md:pl-0`}
              >
                {/* Dot */}
                <span
                  className="absolute left-4 md:left-auto top-2 -translate-x-1/2
                             md:translate-x-0 w-3 h-3 rotate-45
                             bg-blue-400
                             shadow-[0_0_12px_rgba(96,165,250,0.7)]
                             md:[--dot-side:0]"
                  style={
                    idx % 2 === 0
                      ? { right: "-7px" }
                      : { left: "-7px" }
                  }
                />

                <Tilt3D maxTilt={5} className="glass-panel p-7">
                  <p className="eyebrow !text-blue-300">{exp.period}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-blue-400 font-medium">{exp.org}</p>

                  <ul className="mt-4 space-y-2 text-sm text-slate-300 leading-relaxed">
                    {exp.points.map((pt) => (
                      <li key={pt}>• {pt}</li>
                    ))}
                  </ul>
                </Tilt3D>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
