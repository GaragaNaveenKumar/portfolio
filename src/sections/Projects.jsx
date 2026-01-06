import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Smart Appointment System",
      description:
        "A web platform that allows users to book, manage, and track appointments with real-time updates.",
      image: "https://via.placeholder.com/400x250",
      liveLink: "https://example.com",
      githubLink: "https://github.com/example/repo",
      tools: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "User Profile Manager",
      description:
        "An admin dashboard to manage users, roles, and permissions with secure authentication.",
      image: "https://via.placeholder.com/400x250",
      liveLink: "https://example.com",
      githubLink: "https://github.com/example/repo",
      tools: ["React", "Express", "JWT"],
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website to showcase projects, skills, and contact information.",
      image: "https://via.placeholder.com/400x250",
      liveLink: "https://example.com",
      githubLink: "https://github.com/example/repo",
      tools: ["React", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 
                 bg-gradient-to-br from-cyan-50 via-rose-50 to-violet-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-teal-700">
            Projects 🚀
          </h2>

          <div
            className="w-32 h-1 mx-auto mt-3 rounded-full
                       bg-gradient-to-r from-cyan-600 to-violet-600"
          ></div>

          <p className="mt-5 text-lg font-medium text-rose-700 max-w-2xl mx-auto">
            A selection of projects where I applied my skills to build
            real-world, practical applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
