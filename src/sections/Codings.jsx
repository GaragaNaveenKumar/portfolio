import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";


const profiles = [
  {
    name: "GitHub",
    username: "GaragaNaveenKumar",
    link: "https://github.com/GaragaNaveenKumar",
    stat: "Projects, full-stack apps & open-source code",
    icon: <FaGithub />,
  },
  {
    name: "LeetCode",
    username: "GaragaNaveenKumar",
    link: "https://leetcode.com/23a35a0517/",
    stat: "Knight (2100+) rating,1350+ problems solved",
    icon: "LC",
  },
  {
    name: "Codeforces",
    username: "GaragaNaveenKumar",
    link: "https://codeforces.com/profile/Naveen_30",
    stat: "Max rating ~1200",
    icon: "CF",
  },
];

export default function Coding() {
  return (
    <section
      id="coding"
      className="relative py-28 px-6 bg-[#0b0f1a]"
    >
   
      <div className="absolute top-20 left-20 w-72 h-72
                      bg-violet-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
   
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-white"
        >
          Coding Profiles
        </motion.h2>

        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          Platforms where I actively write code, practice problem solving,
          and build real-world applications.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {profiles.map((profile) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-xl
                         border border-white/10
                         rounded-3xl p-8
                         hover:border-white/20 transition"
            >
      
              <div className="text-3xl font-bold text-white mb-4">
                {profile.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {profile.name}
              </h3>

              <p className="mt-2 text-slate-400 text-sm">
                @{profile.username}
              </p>

              <p className="mt-6 text-base font-medium text-slate-200">
                {profile.stat}
              </p>

              <span className="inline-block mt-8 text-sm font-semibold
                               text-fuchsia-400">
                View Profile →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
