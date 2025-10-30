// app/page.js
'use client'

import Image from "next/image";

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative text-white py-24 px-4 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/fire_button_unsplash.jpg')", // 🖼️ replace with your image
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Akebarry Global Services Ltd
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6">
            Experts in Fire Safety, Workplace Protection & Fire Extinguisher Services
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/verify-certificate"
              className="bg-white text-red-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
            >
              Verify Certificate
            </Link>
            <Link
              href="/services"
              className="bg-green-600 text-white font-semibold px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Our Services
            </Link>
          </div>
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
          {/* Service 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition flex flex-col items-center">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="/images/extings_with_tags_2.JPG"
                alt="Fire Extinguisher Sales"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-red-600">Fire Extinguisher Sales</h3>
            <p className="text-gray-700 text-center">
              High-quality extinguishers for commercial, industrial, and residential properties.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition flex flex-col items-center">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="/images/chinedu_by_sea.JPG" 
                alt="Fire Extinguisher Sales"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-red-600">Servicing & Maintenance</h3>
            <p className="text-gray-700 text-center">
              Inspection, refilling, and functional testing to keep your equipment compliant and ready.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition flex flex-col items-center">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="/images/corpers.JPG" 
                alt="Fire Extinguisher Sales"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-red-600">HSE Training & Consultancy</h3>
            <p className="text-gray-700 text-center">
              Customized training and risk assessments to enhance safety awareness across your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Message from the Managing Director */}
      <section className="py-20 px-6 bg-gray-50 flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
        {/* MD Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/images/Dad.JPG" // ← replace with your actual image name
            alt="Managing Director"
            className="rounded-2xl shadow-lg w-64 h-64 object-cover"
          />
        </div>

        {/* MD Message */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            Message from the Managing Director
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At <span className="font-semibold">Akebarry Global Services</span>, safety is not just our
            business — it’s our commitment to every client we serve.  
            Our goal is to create safer workplaces and communities by
            providing world-class fire protection and HSE consultancy services.
          </p>
          <p className="text-gray-600 italic">— Prince M. N. Akekue, Managing Director</p>
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
