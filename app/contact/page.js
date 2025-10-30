// app/contact/page.js
'use client'

import Image from "next/image";
export default function ContactPage() {
  const faqs = [
    {
      question: 'How can I verify my fire safety certificate?',
      answer:
        'You can verify your certificate by visiting our Verify page and entering the unique certificate code provided.',
    },
    {
      question: 'Do you offer on-site servicing for fire extinguishers?',
      answer:
        'Yes, we provide inspection, refilling, and maintenance services at your premises to ensure all equipment is compliant and functional.',
    },
    {
      question: 'Which types of fire extinguishers do you sell?',
      answer:
        'We supply DCP (Dry Chemical Powder) extinguishers in various sizes and CO2 extinguishers for commercial, industrial, and residential use.',
    },
    {
      question: 'Do you provide HSE training for organizations?',
      answer:
        'Absolutely. We offer customized HSE training programs for management and staff, tailored to your organization’s needs.',
    },
    {
      question: 'Where are your offices located?',
      answer:
        'Our office is located at No. 3 Hilltop Drive, Rumukalagbor, Port Harcourt, Rivers State. Our workshop is at Plot 2, Road 8, Shell Location Road, Rumu-Akania, Port Harcourt.',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative text-white py-24 px-4 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/contact_arrow_unsplash.jpg')", // 🖼️ replace with your own image
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Akebarry Global Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Get in touch with our experts for fire safety, consultancy, and workplace protection services.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-red-600">Contact Information</h2>
        <p className="mb-2 text-gray-700">Office: No. 3 Hilltop Drive, Rumukalagbor, Port Harcourt</p>
        <p className="mb-2 text-gray-700">Workshop: Plot 2, Road 8, Shell Location Road, Rumu-Akania, Port Harcourt</p>
        <p className="mb-2 text-gray-700">Phone: 0803-341-8797 | 0804-880-398</p>
        <p className="text-gray-700">Email: akebarryglobalservices@gmail.com</p>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-16 px-4 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-red-600 text-center">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-red-600">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Verify */}
      <section className="py-16 px-4 text-center bg-red-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Verify Your Certificate</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Ensure your fire safety certificate is valid and recognized by Akebarry Global Services.
        </p>
        <a
          href="/verify-certificate"
          className="bg-white text-red-600 font-semibold px-8 py-3 rounded hover:bg-gray-100 transition"
        >
          Verify Now
        </a>
      </section>
    </div>
  )
}
