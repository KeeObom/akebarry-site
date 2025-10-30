'use client'

import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      title: 'Fire Extinguisher Sales',
      description:
        'High-quality fire extinguishers for commercial, industrial, and residential properties. Available in various sizes and types to suit your needs.',
      image: '/images/extings_with_tags.JPG', // 🖼️ replace with your image
      color: 'bg-red-600',
    },
    {
      title: 'Servicing & Maintenance',
      description:
        'Regular inspection, refilling, and functional testing to ensure your fire protection equipment is compliant and ready for emergencies.',
      image: '/images/chinedu_by_sea.JPG',
      color: 'bg-green-600',
    },
    {
      title: 'HSE Training & Consultancy',
      description:
        'Customized training and risk assessments to enhance safety awareness and compliance across your organization.',
      image: '/images/nysc.png',
      color: 'bg-red-600',
    },
    {
      title: 'Pre-Accreditation & Vulnerability Assessment',
      description:
        'We partner with institutions to ensure safety requirements are met before licensing or expansion. Identify hazards and prepare your facility for audits.',
      image: '/images/happy_at_nysccamp.JPG',
      color: 'bg-green-600',
    },
    {
      title: 'Safety Planning & Policy Development',
      description:
        'Site-specific safety plans, policies, and procedures to address workplace hazards and ensure regulatory compliance.',
      image: '/images/fire_hydrant.jpg',
      color: 'bg-red-600',
    },
    {
      title: 'Workshops & Awareness Programs',
      description:
        'On-site and virtual training sessions covering fire safety, emergency response, and occupational health & safety practices.',
      image: '/images/workshop.png',
      color: 'bg-green-600',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative bg-red-600 text-white py-24 px-4 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/single_exting_unsplash.jpg')", // 🖼️ your local image path
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Overlay */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Comprehensive fire protection, workplace safety, and HSE consultancy services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 md:px-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition flex flex-col items-center text-center p-6"
            >
              <div className="w-full h-48 relative mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className={`text-xl font-semibold mb-3 text-white ${service.color} px-2 py-1 rounded`}>
                {service.title}
              </h3>
              <p className="text-gray-700 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Started with Akebarry</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Protect your workplace and ensure compliance with expert fire safety services.
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
