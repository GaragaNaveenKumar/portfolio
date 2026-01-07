import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  image,
  liveLink,
  githubLink,
  tools,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-3xl overflow-hidden
                 bg-white/5 backdrop-blur-xl
                 border border-white/10
                 shadow-xl shadow-violet-500/10
                 hover:shadow-fuchsia-500/20"
    >
      {/* Glow */}
      <div className="absolute inset-0 
                      bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 
                      opacity-0 hover:opacity-100 transition" />

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="relative p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed">
          {description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 text-xs font-semibold
                         rounded-full
                         bg-white/10 text-slate-200
                         border border-white/10"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-xl
                       font-semibold text-white
                       bg-gradient-to-r from-cyan-500 to-teal-500
                       hover:scale-105 transition"
          >
            Live
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-xl
                       font-semibold text-white
                       bg-gradient-to-r from-violet-500 to-fuchsia-500
                       hover:scale-105 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
