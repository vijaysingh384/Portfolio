import { useState } from 'react'
import emailjs from '@emailjs/browser'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

// Replace these with your actual EmailJS credentials
const SERVICE_ID = 'service_lfkta52'
const TEMPLATE_ID = 'template_enrw93a'
const PUBLIC_KEY = 'kfWbtZMjh8J3F-GA_'

function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      )
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setForm({ name: '', email: '', message: '' })
    setSubmitted(false)
    setError('')
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-border-primary bg-white p-8 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
        >
          ✕
        </button>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-2xl">🎉</div>
            <h2 className="text-xl font-semibold">Message sent!</h2>
            <p className="text-sm text-text-secondary">Thanks for reaching out. I'll get back to you soon.</p>
            <button
              onClick={handleClose}
              className="mt-2 rounded-full bg-indigo-600 px-6 py-2 text-sm text-white hover:bg-indigo-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="mb-1 text-xl font-semibold">Let's connect</h2>
            <p className="mb-6 text-sm text-text-secondary">Fill in the form and I'll get back to you.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-text-primary">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="rounded-lg border border-border-primary px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-text-primary">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="rounded-lg border border-border-primary px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-text-primary">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="rounded-lg border border-border-primary px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition resize-none"
                />
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="mt-1 rounded-full bg-indigo-600 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default ContactModal
