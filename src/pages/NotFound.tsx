import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
        <p className="text-6xl font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-text-primary">Page not found</h1>
        <p className="mt-2 text-sm text-text-secondary max-w-sm">
          Looks like this page doesn't exist. It may have been moved or the URL is wrong.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border-primary px-5 py-2.5 text-sm font-medium text-text-primary hover:border-indigo-400 hover:text-indigo-600 transition-all"
        >
          ← Back home
        </Link>
      </div>
    </>
  )
}

export default NotFound
