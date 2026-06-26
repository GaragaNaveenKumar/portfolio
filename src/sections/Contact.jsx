import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6"
    >

      <div className="absolute top-24 right-24 w-72 h-72
                      bg-blue-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">

        <p className="eyebrow text-center">Let's Talk</p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-2 section-heading"
        >
          Get In Touch
        </motion.h2>

        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          Interested in working together, discussing opportunities, or
          just having a quick chat? Feel free to reach out.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-14 items-start">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-slate-300"
          >
            <h3 className="font-display text-2xl font-bold text-white">
              Let's Connect
            </h3>

            <p className="text-lg leading-relaxed text-slate-400">
              I'm a final-year student actively looking for SDE and
              internship opportunities, and always open to discussing new
              projects or full-time roles where I can contribute and grow
              as a developer.
            </p>

            <div className="space-y-3 text-base">
              <p>📧 naveenkumargaraga@gmail.com</p>
              <p>📍 India</p>
              <p>💼 Open to internships & entry-level roles</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="glass-panel p-8 space-y-6"
          >
            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-300">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-none
                           bg-black/40 text-white
                           border border-blue-400/20
                           focus:outline-none focus:border-blue-400/60"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-300">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-none
                           bg-black/40 text-white
                           border border-blue-400/20
                           focus:outline-none focus:border-blue-400/60"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-300">
                Message
              </label>
              <textarea
                rows="4"
                required
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-none
                           bg-black/40 text-white
                           border border-blue-400/20
                           focus:outline-none focus:border-blue-400/60"
              ></textarea>
            </div>

            <button
              type="submit"
              className="glass-btn w-full py-3
                         bg-blue-600 border border-blue-400/40
                         shadow-[0_0_24px_-4px_rgba(59,130,246,0.6)]
                         hover:bg-blue-500 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
