import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaGoogle, FaBolt, FaNetworkWired } from "react-icons/fa";
import Tilt3D from "../components/Tilt3D";

const skillGroups = [
  {
    title: "Programming Languages",
    description: "Core languages used for problem-solving and backend development.",
    skills: [
      { name: "C++", icon: "devicon-cplusplus-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
  },
  {
    title: "Frontend Development",
    description: "Building responsive, accessible, and modern user interfaces.",
    skills: [
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
      { name: "React.js", icon: "devicon-react-original" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
    ],
  },
  {
    title: "Backend Development",
    description: "Designing REST APIs and scalable server-side applications.",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express.js", icon: "devicon-express-original" },
    ],
  },
  {
    title: "Databases",
    description: "Data modeling and storage across SQL and NoSQL systems.",
    skills: [
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    ],
  },
  {
    title: "AI / Agentic AI",
    description: "Building AI-powered tools and learning agent architectures.",
    skills: [
      { name: "LangChain", node: <FaNetworkWired /> },
      { name: "LangGraph", node: <FaBrain /> },
      { name: "RAG (basics)", node: <FaRobot /> },
      { name: "Gemini API", node: <FaGoogle /> },
      { name: "Groq API", node: <FaBolt /> },
    ],
  },
  {
    title: "Cloud & Tools",
    description: "Deployment, version control, and developer workflow tools.",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Postman", icon: "devicon-postman-plain" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="absolute bottom-24 left-24 w-72 h-72
                      bg-blue-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <p className="eyebrow text-center">Toolbox</p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-2 section-heading"
        >
          Skills
        </motion.h2>

        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          Technologies and languages I use to build scalable, high-quality
          software — and the AI tooling I'm actively leveling up on.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2 perspective-grid">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Tilt3D maxTilt={6} className="glass-panel p-8">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {group.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {group.description}
                </p>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3
                                 px-4 py-3 rounded-none
                                 bg-blue-500/[0.06] border border-blue-400/15
                                 hover:bg-blue-500/10 hover:border-blue-400/30 transition"
                    >
                      <span className="text-2xl text-white flex items-center">
                        {skill.node ?? <i className={`${skill.icon} text-2xl`}></i>}
                      </span>
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
