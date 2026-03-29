import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const certificates = [
  {
    title: "AI Fluency: Framework & Foundation",
    issuer: "Anthropic",
    date: "March - 2026",
    credential: "https://verify.skilljar.com/c/8i2iyxcdhwr3", // paste credential URL here
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828884.png",
  },
  {
    title: " Data Structures & Algorithms using C++ ",
    issuer: "LPU ",
    date: "june 2025",
    credential: "https://drive.google.com/file/d/1K2tuyTQO3E4gH13yr09xlwIgcTiiAlWi/view?pli=1 ",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828884.png",
  },
];

function Certificates() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-sm font-medium text-violet-600">Achievements</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-text-primary">
            Certificates
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-base text-text-secondary leading-relaxed">
            Courses, certifications, and programs I've completed to sharpen my skills
            and stay current with the industry.
          </p>
        </div>

        {/* Certificates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-2xl border border-border-primary bg-white p-6 hover:border-indigo-300 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 rounded-xl border border-border-primary bg-zinc-50 p-2.5 flex items-center justify-center shrink-0">
                  <img src={cert.icon} alt={cert.issuer} className="h-7 w-7 object-contain" />
                </div>
                {cert.credential && (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full border border-border-primary px-3 py-1 text-xs text-text-secondary hover:border-indigo-400 hover:text-indigo-600 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View
                  </a>
                )}
              </div>

              <h2 className="text-base font-semibold text-text-primary">{cert.title}</h2>
              <p className="text-sm text-violet-600 mt-1">{cert.issuer}</p>
              <p className="text-xs text-text-secondary mt-3 border-t border-border-primary pt-3">
                Issued {cert.date}
              </p>
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Certificates;
