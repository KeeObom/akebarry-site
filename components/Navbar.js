'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react' // icons for hamburger and close

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between items-center shadow-md relative">
      {/* Logo and Name */}
      <div className="flex items-center space-x-2">
        <Image
          src="/images/AGS_logo_ext.svg"
          alt="Akebarry Logo"
          width={32}
          height={32}
          className="rounded"
        />
        <span className="font-bold text-base sm:text-lg tracking-wide whitespace-nowrap">
          Akebarry Global Services
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4 font-medium">
        <Link href="/" className="hover:text-gray-200 transition">Home</Link>
        <Link href="/about" className="hover:text-gray-200 transition">About</Link>
        <Link href="/services" className="hover:text-gray-200 transition">Services</Link>
        <Link href="/contact" className="hover:text-gray-200 transition">Contact</Link>
        <Link href="/verify-certificate" className="hover:text-gray-200 transition">Verify</Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-red-600 flex flex-col items-center space-y-4 py-4 font-medium md:hidden z-50">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition">About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition">Services</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition">Contact</Link>
          <Link href="/verify-certificate" onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition">Verify</Link>
        </div>
      )}
    </nav>
  )
}



// import Link from 'next/link'
// import Image from 'next/image'

// export default function Navbar() {
//   return (
//     <nav className="bg-red-600 text-white p-4 flex justify-between items-center shadow-md">
//       <div className="flex items-center space-x-2">
//         <Image
//           src="/images/AGS_logo_ext.svg"   // make sure this file is inside /public/images/
//           alt="Akebarry Logo"
//           width={32}
//           height={32}
//           className="rounded"
//         />
//         <span className="font-bold text-lg tracking-wide">Akebarry Global Services Ltd</span>
//       </div>

//       <div className="space-x-4 font-medium">
//         <Link href="/" className="hover:text-gray-200 transition">Home</Link>
//         <Link href="/about" className="hover:text-gray-200 transition">About</Link>
//         <Link href="/services" className="hover:text-gray-200 transition">Services</Link>
//         <Link href="/contact" className="hover:text-gray-200 transition">Contact</Link>
//         <Link href="/verify-certificate" className="hover:text-gray-200 transition">Verify</Link>
//       </div>
//     </nav>
//   )
// }


