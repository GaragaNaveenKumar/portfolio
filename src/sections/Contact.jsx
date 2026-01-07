import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-[#0b0f1a]"
    >

      <div className="absolute top-24 right-24 w-72 h-72
                      bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">


        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-white"
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
            <h3 className="text-2xl font-bold text-white">
              Let’s Connect
            </h3>

            <p className="text-lg leading-relaxed text-slate-400">
              I’m always open to discussing new projects, internship
              opportunities, or full-time roles where I can contribute
              and grow as a developer.
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
            className="bg-white/5 backdrop-blur-xl
                       border border-white/10
                       rounded-3xl p-8 space-y-6"
          >
            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-300">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl
                           bg-black/30 text-white
                           border border-white/10
                           focus:outline-none focus:border-fuchsia-400"
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
                className="w-full px-4 py-3 rounded-xl
                           bg-black/30 text-white
                           border border-white/10
                           focus:outline-none focus:border-fuchsia-400"
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
                className="w-full px-4 py-3 rounded-xl
                           bg-black/30 text-white
                           border border-white/10
                           focus:outline-none focus:border-fuchsia-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl
                         font-semibold text-white
                         bg-gradient-to-r from-violet-500 to-fuchsia-500
                         hover:opacity-90 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
