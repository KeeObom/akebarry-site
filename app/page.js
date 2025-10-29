// app/page.js
'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Akebarry Global Services Ltd
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6">
          Experts in Fire Safety, Workplace Protection & Fire Extinguisher Services
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/verify-certificate" className="bg-white text-red-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
            Verify Certificate
          </Link>
          <Link href="/services" className="bg-green-600 text-white font-semibold px-6 py-3 rounded hover:bg-green-700 transition">
            Our Services
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-red-600">About Akebarry</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Formerly Akebarry Nigeria Limited, Akebarry Global Services Ltd is a professional fire protection and workplace safety company. 
          We provide fire extinguisher sales, servicing, safety consultancy, HSE training, and specialized fire risk management for organizations. 
          Our certified experts ensure your workplace is safe, compliant, and prepared for emergencies.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-10 text-red-600">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-red-600">Fire Extinguisher Sales</h3>
            <p className="text-gray-700">High-quality extinguishers for commercial, industrial, and residential properties.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-red-600">Servicing & Maintenance</h3>
            <p className="text-gray-700">Inspection, refilling, and functional testing to keep your equipment compliant and ready.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-red-600">HSE Training & Consultancy</h3>
            <p className="text-gray-700">Customized training and risk assessments to enhance safety awareness across your organization.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center bg-red-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ensure Your Safety Today</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Get your certificates verified and equipment serviced by trusted experts in fire safety.
        </p>
        <Link href="/verify-certificate" className="bg-white text-red-600 font-semibold px-8 py-3 rounded hover:bg-gray-100 transition">
          Verify Your Certificate
        </Link>
      </section>

      {/* Footer CTA / Contact Preview */}
      <section className="py-16 px-4 md:px-20 text-center">
        <h3 className="text-2xl font-bold mb-4 text-red-600">Contact Us</h3>
        <p className="mb-4 text-gray-700">Office: No. 3 Hilltop Drive, Rumukalagbor, Port Harcourt</p>
        <p className="text-gray-700">Phone: 0803-341-8797 | Email: akebarrynigltd@gmail.com</p>
      </section>
    </div>
  )
}
