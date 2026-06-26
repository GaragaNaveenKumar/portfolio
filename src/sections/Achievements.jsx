import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { FaGithub, FaCode, FaTrophy } from "react-icons/fa";
import Tilt3D from "../components/Tilt3D";

function Counter({ to, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, to, duration]);

  return (
    <span ref={ref} className="font-display font-bold text-4xl md:text-5xl gradient-text">
      {value}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 1500, suffix: "+", label: "LeetCode Problems Solved" },
  { value: 2100, suffix: "+", label: "LeetCode Contest Rating" },
  { value: 1, suffix: "%", label: "Top Percentile, Globally" },
  { value: 5, suffix: "+", label: "Merged Open-Source PRs" },
];

const profiles = [
  {
    name: "GitHub",
    username: "GaragaNaveenKumar",
    link: "https://github.com/GaragaNaveenKumar",
    stat: "Full-stack apps, AI projects & open-source contributions",
    icon: <FaGithub />,
  },
  {
    name: "LeetCode",
    username: "GaragaNaveenKumar",
    link: "https://leetcode.com/23a35a0517/",
    stat: "Top 1% · 2,100+ rating · 1,500+ problems solved",
    icon: <FaCode />,
  },
  {
    name: "CodeChef",
    username: "naveenkumargaraga",
    link: "https://www.codechef.com/",
    stat: "1,500+ rating across long & short contests",
    icon: <FaTrophy />,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6">
      <div className="absolute top-20 left-20 w-72 h-72
                      bg-blue-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <p className="eyebrow text-center">Track Record</p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-2 section-heading"
        >
          Achievements
        </motion.h2>

        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          Competitive programming results and the platforms where I keep
          sharpening problem-solving skills.
        </p>

        {/* Stat counters */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 text-center"
            >
              <Counter to={s.value} suffix={s.suffix} />
              <p className="mt-2 text-xs md:text-sm font-mono uppercase tracking-wide text-slate-400">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Profile cards */}
        <div className="mt-14 grid gap-10 md:grid-cols-3 perspective-grid">
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
              className="block"
            >
              <Tilt3D maxTilt={6} className="glass-panel p-8">
                <div className="text-3xl text-white mb-4">{profile.icon}</div>

                <h3 className="font-display text-2xl font-semibold text-white">
                  {profile.name}
                </h3>

                <p className="mt-2 text-slate-400 text-sm font-mono">
                  @{profile.username}
                </p>

                <p className="mt-6 text-base font-medium text-slate-200">
                  {profile.stat}
                </p>

                <span className="inline-block mt-8 text-sm font-semibold text-blue-400">
                  View Profile →
                </span>
              </Tilt3D>
            </motion.a>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          CodeChef link points to the homepage — drop in your exact profile
          URL when you have it handy.
        </p>
      </div>
    </section>
  );
}
