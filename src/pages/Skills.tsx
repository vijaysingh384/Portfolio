import Navbar from "../components/Navbar";

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png" },
      { name: "TypeScript", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png" },
      { name: "Java", icon: "https://cdn-icons-png.flaticon.com/128/226/226777.png" },
      { name: "C++", icon: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png" },
      { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png" },
      { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "https://cdn-icons-png.flaticon.com/128/919/919853.png" },
      { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968322.png" },
      { name: "Express.js", icon: "https://cdn-icons-png.flaticon.com/128/919/919825.png" },
      { name: "Tailwind CSS", icon: "https://cdn-icons-png.flaticon.com/128/4248/4248443.png" },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "MongoDB", icon: "https://cdn-icons-png.flaticon.com/128/11402/11402192.png" },
      { name: "Git", icon: "https://cdn-icons-png.flaticon.com/128/2111/2111288.png" },
      { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/128/2111/2111432.png" },
      { name: "VS Code", icon: "https://cdn-icons-png.flaticon.com/128/906/906324.png" },
      // {name: "SQL" , icon: "https://cdn-icons-png.flaticon.com/128/4248/4248443.png"},
    ],
  },
  {
    category: "Concepts",
    skills: [
      { name: "OOP", icon: "https://cdn-icons-png.flaticon.com/128/8637/8637101.png" },
      { name: "REST APIs", icon: "https://cdn-icons-png.flaticon.com/128/2165/2165004.png" },
      { name: "Responsive Design", icon: "https://cdn-icons-png.flaticon.com/128/2620/2620265.png" },
      { name: "Data Structures", icon: "https://cdn-icons-png.flaticon.com/128/2103/2103633.png" },
    ],
  },
];

function Skills() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-sm font-medium text-violet-600">Toolbox</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-text-primary">
            Skills & Technologies
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-base text-text-secondary leading-relaxed">
            The languages, frameworks, and tools I work with to build fast,
            scalable, and well-crafted software.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="flex flex-col gap-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              {/* Section label */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-violet-600 whitespace-nowrap">{group.category}</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-border-primary bg-white p-4 hover:border-indigo-300 hover:shadow-sm transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-12 w-12 rounded-xl border border-border-primary bg-zinc-50 p-2 flex items-center justify-center group-hover:border-indigo-300 transition-colors">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-7 w-7 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://cdn-icons-png.flaticon.com/128/1055/1055687.png";
                        }}
                      />
                    </div>
                    <span className="text-xs font-medium text-text-secondary text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently learning */}
        <div className="mt-14 rounded-2xl border border-border-primary bg-white p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse"></span>
            <span className="text-sm font-medium text-sky-500">Currently exploring</span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">
            Always leveling up — right now I'm diving deeper into full-stack development with the MERN stack,
            exploring system design principles, and sharpening my DSA skills for competitive programming.
          </p>
        </div>

      </main>
    </>
  );
}

export default Skills;
