import Tilt3D from "./Tilt3D";

export default function ProjectCard({
  title,
  description,
  image,
  icon,
  liveLink,
  githubLink,
  tools,
}) {
  return (
    <Tilt3D maxTilt={8} className="glass-panel overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0
                      bg-gradient-to-br from-blue-500/10 via-transparent to-blue-700/10
                      opacity-0 hover:opacity-100 transition pointer-events-none" />

      {/* Image or icon placeholder */}
      {image ? (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 flex items-center justify-center
                        bg-gradient-to-br from-blue-600/20 via-void-900 to-blue-400/10
                        border-b border-blue-400/15">
          <span className="text-6xl text-blue-300">{icon}</span>
        </div>
      )}

      {/* Content */}
      <div className="relative p-6 space-y-4">
        <h3 className="font-display text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed">
          {description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span key={tool} className="data-tag">
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
            className="glass-btn flex-1 text-center px-4 py-2
                       border border-blue-400/30 text-blue-200
                       hover:bg-blue-500/10 hover:border-blue-400/50 transition"
          >
            Live
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="glass-btn flex-1 text-center px-4 py-2
                       bg-blue-600 border border-blue-400/40
                       shadow-[0_0_18px_-4px_rgba(59,130,246,0.55)]
                       hover:bg-blue-500 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </Tilt3D>
  );
}
