const education = [
  {
  degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
  institution: "Lovely Professional University",
  duration: "2023 - 2027",
  description: "Pursuing undergraduate studies in Computer Science and Engineering with a focus on software development, data structures, algorithms, and web technologies. Actively working on real-world projects to strengthen practical programming and problem-solving skills."
},
  {
    degree: "Higher Secondary (12th)",
    institution: "Dav public school , jaipur",
    
  },
];

function Education() {
  return (
    <section className="px-4 md:px-8 lg:px-16 mt-16 mb-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-md font-medium text-violet-600 whitespace-nowrap">Education</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div className="flex flex-col gap-4">
        {education.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border-primary bg-white p-6 hover:border-indigo-300 hover:shadow-sm transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
              <div>
                <h3 className="text-base font-semibold text-text-primary">{item.degree}</h3>
                <p className="text-sm text-violet-600 mt-0.5">{item.institution}</p>
              </div>
              <span className="text-xs text-text-secondary border border-border-primary rounded-full px-3 py-1 h-fit whitespace-nowrap">
                {item.duration}
              </span>
            </div>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
