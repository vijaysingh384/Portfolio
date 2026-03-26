interface CVModalProps {
  isOpen: boolean
  onClose: () => void
}

function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-[90vw] max-w-4xl h-[90vh] rounded-2xl border border-border-primary bg-white shadow-xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border-primary">
          <span className="text-sm font-medium text-text-primary">My CV</span>
          <div className="flex items-center gap-3">
            <a
              href="public/cv.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-border-primary px-4 py-1.5 text-xs font-medium text-text-primary hover:border-indigo-400 hover:text-indigo-600 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download
            </a>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <iframe
          src="public/cv.pdf"
          className="flex-1 w-full"
          title="CV"
        />
      </div>
    </div>
  )
}

export default CVModal
