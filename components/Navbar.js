// components/Navbar.js
'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between">
      <div className="font-bold text-lg">Akebarry</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/verify-certificate">Verify</Link>
      </div>
    </nav>
  )
}
