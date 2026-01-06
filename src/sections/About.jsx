export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-r from-blue-50 via-green-50 to-orange-50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-blue-700">
          About Me
        </h2>

        {/* Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-5 text-lg leading-relaxed">
            <p className="text-green-700 font-semibold">
              Hello! I’m Naveen 👋
            </p>

            <p className="text-blue-800">
              I’m a passionate <span className="font-bold text-orange-600">Full Stack Developer</span> 
              who enjoys building modern, responsive, and user-friendly web applications.
            </p>

            <p className="text-green-800">
              I work mainly with <span className="font-semibold">React, Node.js, Express, MongoDB</span>, 
              and I love turning ideas into real-world products.
            </p>

            <p className="text-blue-700">
              Currently, I’m focused on improving my problem-solving skills, 
              learning system design basics, and building meaningful projects.
            </p>
          </div>

          {/* Right: Highlights */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
            <h3 className="text-2xl font-bold text-orange-600">
              Quick Highlights
            </h3>

            <ul className="space-y-3 text-lg font-medium">
              <li className="text-blue-700">🚀 Building real-world full-stack projects</li>
              <li className="text-green-700">⚡ Strong in React & modern UI design</li>
              <li className="text-orange-700">📚 Continuous learner & problem solver</li>
              <li className="text-blue-700">🤝 Team player with good communication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
