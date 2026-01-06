export default function Coding() {
  const profiles = [
    {
      name: "LeetCode",
      username: "naveen_dev",
      link: "https://leetcode.com/",
      bg: "from-yellow-100 to-yellow-50",
      text: "text-yellow-700",
      border: "border-yellow-300",
      stat: "300+ Problems Solved",
      icon: "🧠",
    },
    {
      name: "HackerRank",
      username: "naveen_dev",
      link: "https://www.hackerrank.com/",
      bg: "from-emerald-100 to-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-300",
      stat: "5★ in Python",
      icon: "🏆",
    },
    {
      name: "Codeforces",
      username: "naveen_dev",
      link: "https://codeforces.com/",
      bg: "from-sky-100 to-sky-50",
      text: "text-sky-700",
      border: "border-sky-300",
      stat: "Rating: 1200+",
      icon: "⚔️",
    },
  ];

  return (
    <section
      id="coding"
      className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800">
            Coding Profiles 👨‍💻
          </h2>

          <div className="w-32 h-1 mx-auto mt-3 rounded-full
                          bg-gradient-to-r from-slate-600 to-slate-400"></div>

          <p className="mt-5 text-lg font-medium text-slate-600 max-w-2xl mx-auto">
            My competitive programming and problem-solving journey across
            popular coding platforms.
          </p>
        </div>

        {/* Profiles */}
        <div className="grid gap-10 md:grid-cols-3">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              className={`block p-8 rounded-3xl border-2 ${profile.border}
                          bg-gradient-to-br ${profile.bg}
                          shadow-md hover:shadow-xl
                          hover:-translate-y-2 transition-all`}
            >
              <div className={`text-5xl mb-4 ${profile.text}`}>
                {profile.icon}
              </div>

              <h3 className={`text-2xl font-bold ${profile.text}`}>
                {profile.name}
              </h3>

              <p className="mt-2 text-base font-semibold text-slate-700">
                @{profile.username}
              </p>

              <p className={`mt-4 text-lg font-bold ${profile.text}`}>
                {profile.stat}
              </p>

              <span
                className={`inline-block mt-6 px-5 py-2 rounded-full
                            text-sm font-bold ${profile.text}
                            bg-white/70`}
              >
                View Profile →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
