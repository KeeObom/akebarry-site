'use client'
import { useState } from 'react'
import Image from "next/image";

export default function VerifyPage() {
  const [code, setCode] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    try {
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })

      const data = await res.json()
      setResult(data)
    } catch (err) {
      setResult({ error: 'Network error.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Hero Section */}
      <section
        className="bg-red-600 text-white py-20 px-4 text-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/images/fire-bg.jpg')", // optional background
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold">Verify Your Certificate</h1>
          <img
            src="/images/verify_unsplash.svg"
            alt="Verify Icon"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </div>

        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Enter your certificate code below to confirm its validity with Akebarry Global Services.
        </p>
      </section>

      {/* Form Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter certificate code..."
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            >
              {loading ? 'Verifying...' : 'Verify'}
            </button>
          </form>

          {result && (
            <div className="mt-6 text-center">
              {result.error && <p className="text-red-600 font-semibold">{result.error}</p>}
              {result.message && (
                <p className={result.valid ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                  {result.message}
                </p>
              )}
              {result.valid && (
                <div className="mt-4 text-gray-700 text-left border-t border-gray-200 pt-4 space-y-1">
                  <p><strong>Name:</strong> {result.student_name}</p>
                  <p><strong>Course:</strong> {result.course_name}</p>
                  <p><strong>Issued:</strong> {result.issued_date}</p>
                  <p><strong>Code:</strong> {result.code}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-red-600">Need Help?</h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-700">
          If you experience any issues verifying your certificate, please contact Akebarry Global Services.
        </p>
        <a
          href="/contact"
          className="bg-red-600 text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  )
}
