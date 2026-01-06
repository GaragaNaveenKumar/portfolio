export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 
                 bg-gradient-to-br from-violet-50 via-rose-50 to-amber-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-violet-700">
            Contact Me ✉️
          </h2>

          <div
            className="w-28 h-1 mx-auto mt-3 rounded-full
                       bg-gradient-to-r from-rose-600 to-violet-600"
          ></div>

          <p className="mt-5 text-lg font-medium text-rose-700 max-w-2xl mx-auto">
            Have a question, opportunity, or just want to say hi?  
            Fill out the form below and I’ll get back to you.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left: Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-700">
              Let’s Connect
            </h3>

            <p className="text-lg text-violet-700 leading-relaxed">
              I’m always open to discussing new projects, creative ideas,
              or opportunities to be part of something meaningful.
            </p>

            <div className="space-y-3 text-lg font-semibold">
              <p className="text-rose-700">📧 email@example.com</p>
              <p className="text-teal-700">📍 India</p>
              <p className="text-violet-700">💼 Open to internships & roles</p>
            </div>
          </div>

          {/* Right: Form */}
          <form
            className="bg-white rounded-3xl shadow-xl p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block mb-1 font-semibold text-violet-700">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl
                           border border-violet-200
                           focus:outline-none focus:ring-2
                           focus:ring-violet-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-rose-700">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl
                           border border-rose-200
                           focus:outline-none focus:ring-2
                           focus:ring-rose-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-amber-700">
                Message
              </label>
              <textarea
                rows="4"
                required
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl
                           border border-amber-200
                           focus:outline-none focus:ring-2
                           focus:ring-amber-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 rounded-xl
                         text-lg font-bold text-white
                         bg-gradient-to-r from-violet-600 to-rose-600
                         hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
