import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming Languages",
    description:
      "Core languages used for problem-solving and backend development.",
    skills: [
      { name: "C++", icon: "devicon-cplusplus-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and modern user interfaces.",
    skills: [
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Designing APIs and scalable server-side applications.",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express.js", icon: "devicon-express-original" },
    ],
  },
  {
    title: "Databases & Tools",
    description:
      "Data storage and developer tools used in production workflows.",
    skills: [
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Postman", icon: "devicon-postman-plain" },
      { name: "Vite", icon: "devicon-vitejs-plain" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 bg-[#0b0f1a]">
      
      <div className="absolute bottom-24 left-24 w-72 h-72
                      bg-fuchsia-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-white"
        >
          Skills
        </motion.h2>

        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          Technologies and languages I use to build scalable,
          high-quality software solutions.
        </p>


        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-xl
                         border border-white/10
                         rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white">
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
                               px-4 py-3 rounded-xl
                               bg-white/10 border border-white/10
                               hover:bg-white/20 transition"
                  >
                    <i
                      className={`${skill.icon} text-2xl text-white`}
                    ></i>
                    <span className="text-sm font-medium text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
