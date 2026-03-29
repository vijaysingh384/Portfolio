import Navbar from "../components/Navbar";

const projects = [
  {
    title: "Nike Clone",
    description:
      "A pixel-perfect e-commerce storefront built with React. Features product listings, dynamic cart, and a fully responsive layout that mirrors the Nike shopping experience.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/vijaysingh384",
    live: "",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732229.png",
    featured: true,
  },
  {
    title: "Apni Dukan",
    description:
      "A full-featured online store with product management, cart functionality, and a clean checkout flow — built to simulate a real-world retail experience.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/vijaysingh384",
    live: "",
    icon: "https://cdn-icons-png.flaticon.com/128/1356/1356596.png",
    featured: true,
  },
  {
    title: "Chat App",
    description:
      "A fast and accurate currency converter supporting live exchange rates. Built with a minimal UI focused on speed and usability across all devices.",
    tags: ["React", "REST API", "TypeScript"],
    github: "https://github.com/vijaysingh384",
    live: "",
    icon: "https://cdn-icons-png.flaticon.com/128/4096/4096358.png",
    featured: false,
  },
];

function Projects() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-sm font-medium text-violet-600">Portfolio</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-text-primary">
            Things I've built
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-base text-text-secondary leading-relaxed">
            A curated collection of projects that reflect my passion for clean interfaces,
            solid architecture, and solving real problems with code.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {projects.filter(p => p.featured).map((project, i) => (
            <div
              key={i}
              className="group relative flex flex-col rounded-2xl border border-border-primary bg-white p-6 hover:border-indigo-300 hover:shadow-md transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 rounded-xl border border-border-primary bg-zinc-50 p-2 flex items-center justify-center">
                  <img src={project.icon} alt={project.title} className="h-8 w-8 object-contain" />
                </div>
                <div className="flex items-center gap-2">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border-primary text-gray-400 hover:border-indigo-400 hover:text-indigo-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border-primary text-gray-400 hover:border-indigo-400 hover:text-indigo-600 transition-colors">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              <h2 className="text-lg font-semibold text-text-primary mb-2">{project.title}</h2>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map(tag => (
                  <span key={tag} className="rounded-full border border-border-primary px-3 py-0.5 text-xs text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="flex flex-col gap-3">
          {projects.filter(p => !p.featured).map((project, i) => (
            <div
              key={i}
              className="group flex items-center justify-between rounded-xl border border-border-primary bg-white px-5 py-4 hover:border-indigo-300 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg border border-border-primary bg-zinc-50 p-1.5 flex items-center justify-center shrink-0">
                  <img src={project.icon} alt={project.title} className="h-6 w-6 object-contain" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{project.title}</h3>
                  <p className="text-xs text-text-secondary mt-0.5 max-w-md">{project.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ml-4 shrink-0">
                {project.tags.map(tag => (
                  <span key={tag} className="hidden md:inline rounded-full border border-border-primary px-2.5 py-0.5 text-xs text-text-secondary">
                    {tag}
                  </span>
                ))}
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-border-primary text-gray-400 hover:border-indigo-400 hover:text-indigo-600 transition-colors">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                    <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </main>
    </>
  );
}

export default Projects;
