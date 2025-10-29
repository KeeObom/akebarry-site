import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <Image
          src="/images/A_cropped-removebg-preview.png"   // make sure this file is inside /public/images/
          alt="Akebarry Logo"
          width={32}
          height={32}
          className="rounded"
        />
        <span className="font-bold text-lg tracking-wide">Akebarry</span>
      </div>

      <div className="space-x-4 font-medium">
        <Link href="/" className="hover:text-gray-200 transition">Home</Link>
        <Link href="/about" className="hover:text-gray-200 transition">About</Link>
        <Link href="/services" className="hover:text-gray-200 transition">Services</Link>
        <Link href="/contact" className="hover:text-gray-200 transition">Contact</Link>
        <Link href="/verify-certificate" className="hover:text-gray-200 transition">Verify</Link>
      </div>
    </nav>
  )
}


// // components/Navbar.js
// 'use client'
// import Link from 'next/link'

// export default function Navbar() {
//   return (
//     <nav className="bg-red-600 text-white p-4 flex justify-between">
//       <div className="font-bold text-lg">Akebarry</div>
//       <div className="space-x-4">
//         <Link href="/">Home</Link>
//         <Link href="/about">About</Link>
//         <Link href="/services">Services</Link>
//         <Link href="/contact">Contact</Link>
//         <Link href="/verify-certificate">Verify</Link>
//       </div>
//     </nav>
//   )
// }
