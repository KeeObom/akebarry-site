// app/about/page.js
'use client'

import Image from "next/image";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero / Banner */}
      <section className="bg-red-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Akebarry Global Services Ltd</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Experts in Fire Safety, Workplace Protection & Fire Extinguisher Services
        </p>
      </section>

      {/* Company Profile */}
      <section className="py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-red-600">Company Profile</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-4">
          Formerly Akebarry Nigeria Limited, Akebarry Global Services Ltd is a professional fire protection and workplace safety company. 
          We specialize in fire extinguisher sales, servicing, safety consultancy, HSE training, and specialized fire risk management for organizations.
        </p>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Our certified experts ensure workplaces are safe, compliant, and prepared for emergencies. With years of experience serving corporate, educational, and governmental institutions, Akebarry stands for reliability, trust, and expertise in fire prevention.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-red-600">Mission & Vision</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-4">
          <strong>Mission:</strong> To provide professional fire protection and life safety services, enhancing the safety and productivity of our clients’ workplaces.
        </p>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          <strong>Vision:</strong> To be recognized as Nigeria’s leading authority in fire safety, workplace protection, and HSE consulting, while continuously expanding our international network.
        </p>
      </section>

      {/* Team */}
      <section className="py-16 px-4 md:px-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-red-600">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Team Member 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition flex flex-col items-center">
            <div className="w-40 h-40 relative mb-4">
              <Image
                src="/images/Dad.JPG" 
                alt="Prince M. N. Akekue"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-600">Prince M. N. Akekue</h3>
            <p className="text-gray-700 text-center">MD/CEO – Fire Protection & Safety Expert</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition flex flex-col items-center">
            <div className="w-40 h-40 relative mb-4">
              <Image
                src="/images/ledua.JPG" 
                alt="Ledua Zor-Akekue"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-600">Ledua Zor-Akekue</h3>
            <p className="text-gray-700 text-center">Legal Adviser</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition flex flex-col items-center">
            <div className="w-40 h-40 relative mb-4">
              <Image
                src="/images/happiness.JPG"
                alt="Happiness Bakor"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-600">Happiness Bakor</h3>
            <p className="text-gray-700 text-center">Head of HSE Training</p>
          </div>
        </div>
      </section>


      {/* CTA / Contact */}
      <section className="bg-red-600 text-white py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Ensure workplace safety and compliance with trusted experts in fire protection.
        </p>
        <a
          href="/contact"
          className="bg-white text-red-600 font-semibold px-8 py-3 rounded hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  )
}
