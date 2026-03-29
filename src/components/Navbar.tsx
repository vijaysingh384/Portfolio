import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/certificates', label: 'Certificates' },
]

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-violet-600 font-medium' : 'font-medium text-gray-500 hover:text-text-primary';

  return (
    <nav className="w-full border-b border-border-primary/50">
      {/* Desktop */}
      <div className="hidden h-16 w-full items-center justify-center px-4 md:flex">
        <ul className="flex items-center space-x-4 rounded-full border border-border-primary px-5 py-2 text-sm text-gray-500">
          {links.map(l => (
            <li key={l.to}>
              <NavLink className={linkClass} to={l.to}>{l.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile */}
      <div className="flex h-14 items-center justify-between px-5 md:hidden">
        <span className="text-sm font-semibold text-text-primary">Vijay Singh</span>
        <button
          onClick={() => setOpen(o => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border-primary text-gray-500 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-border-primary bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  className={linkClass}
                  to={l.to}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
