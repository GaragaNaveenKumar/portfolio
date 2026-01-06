export default function ProjectCard({
  title,
  description,
  image,
  liveLink,
  githubLink,
  tools,
}) {
  return (
    <div
      className="bg-white rounded-3xl overflow-hidden 
                 shadow-md hover:shadow-2xl 
                 hover:-translate-y-2 transition-all duration-300"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-extrabold text-teal-700">
          {title}
        </h3>

        <p className="text-rose-700 text-base leading-relaxed">
          {description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 text-sm font-semibold
                         rounded-full
                         bg-amber-100 text-amber-700"
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
                       bg-gradient-to-r from-cyan-600 to-teal-600
                       hover:opacity-90 transition"
          >
            Live
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-xl
                       font-semibold text-white
                       bg-gradient-to-r from-violet-600 to-fuchsia-600
                       hover:opacity-90 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
