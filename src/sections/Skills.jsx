export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-br from-blue-50 via-green-50 to-orange-50"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
       <h2 className="text-4xl font-extrabold text-blue-700">
    Skills
  </h2>

  {/* underline */}
  <div className="w-24 h-1 mx-auto mt-3 rounded-full 
                bg-blue-600"></div>

  {/* description */}
  <p className="mt-5 text-lg font-medium text-green-700 max-w-2xl mx-auto">
    A collection of technologies and tools I use to design, develop, 
    and deliver modern, scalable, and user-friendly applications.
  </p>

        {/* Skills Layout */}
        <div className="mt-16 space-y-14">

          {/* Frontend */}
          <div className="bg-gray-50 rounded-3xl shadow-lg p-6">
            <h3 className="text-3xl font-bold text-blue-600 mb-6">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-4">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map(skill => (
                <span
                  key={skill}
                  className="px-6 py-2 text-lg font-semibold
                             rounded-full bg-blue-100 text-blue-700
                             hover:bg-blue-600 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-50 rounded-3xl shadow-lg p-6">
            <h3 className="text-3xl font-bold text-green-600 mb-6">
              Backend
            </h3>
            <div className="flex flex-wrap gap-4">
              {["Node.js", "Express.js", "REST APIs"].map(skill => (
                <span
                  key={skill}
                  className="px-6 py-2 text-lg font-semibold
                             rounded-full bg-green-100 text-green-700
                             hover:bg-green-600 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="bg-gray-50 rounded-3xl shadow-lg p-6">
            <h3 className="text-3xl font-bold text-orange-600 mb-6">
              Database
            </h3>
            <div className="flex flex-wrap gap-4">
              {["MongoDB", "PostgreSQL"].map(skill => (
                <span
                  key={skill}
                  className="px-6 py-2 text-lg font-semibold
                             rounded-full bg-orange-100 text-orange-700
                             hover:bg-orange-600 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-gray-50 rounded-3xl shadow-lg p-6">
            <h3 className="text-3xl font-bold text-purple-600 mb-6">
              Tools
            </h3>
            <div className="flex flex-wrap gap-4">
              {["Git", "GitHub", "Vite", "Postman"].map(skill => (
                <span
                  key={skill}
                  className="px-6 py-2 text-lg font-semibold
                             rounded-full bg-purple-100 text-purple-700
                             hover:bg-purple-600 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
