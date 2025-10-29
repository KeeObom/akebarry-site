'use client'
import { useState } from 'react'

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
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-4">Verify Your Certificate</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter certificate code..."
          className="w-full border rounded px-3 py-2 mb-3 focus:outline-none focus:ring focus:border-blue-400"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Verifying...' : 'Verify'}
        </button>
      </form>

      {result && (
        <div className="mt-6 text-center">
          {result.error && <p className="text-red-600">{result.error}</p>}
          {result.message && (
            <p className={result.valid ? 'text-green-600' : 'text-red-600'}>
              {result.message}
            </p>
          )}
          {result.valid && (
            <div className="mt-2 text-gray-700">
              <p><strong>Name:</strong> {result.student_name}</p>
              <p><strong>Course:</strong> {result.course_name}</p>
              <p><strong>Issued:</strong> {result.issued_date}</p>
              <p><strong>Code:</strong> {result.code}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
