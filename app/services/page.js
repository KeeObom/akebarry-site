// app/services/page.js
'use client'

export default function ServicesPage() {
  const services = [
    {
      title: 'Fire Extinguisher Sales',
      description:
        'High-quality fire extinguishers for commercial, industrial, and residential properties. Available in various sizes and types to suit your needs.',
      color: 'bg-red-600',
    },
    {
      title: 'Servicing & Maintenance',
      description:
        'Regular inspection, refilling, and functional testing to ensure your fire protection equipment is compliant and ready for emergencies.',
      color: 'bg-green-600',
    },
    {
      title: 'HSE Training & Consultancy',
      description:
        'Customized training and risk assessments to enhance safety awareness and compliance across your organization.',
      color: 'bg-red-600',
    },
    {
      title: 'Pre-Accreditation & Vulnerability Assessment',
      description:
        'We partner with institutions to ensure safety requirements are met before licensing or expansion. Identify hazards and prepare your facility for audits.',
      color: 'bg-green-600',
    },
    {
      title: 'Safety Planning & Policy Development',
      description:
        'Site-specific safety plans, policies, and procedures to address workplace hazards and ensure regulatory compliance.',
      color: 'bg-red-600',
    },
    {
      title: 'Workshops & Awareness Programs',
      description:
        'On-site and virtual training sessions covering fire safety, emergency response, and occupational health & safety practices.',
      color: 'bg-green-600',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Comprehensive fire protection, workplace safety, and HSE consultancy services.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 md:px-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md p-6 hover:shadow-xl transition flex flex-col justify-between`}
            >
              <h3 className={`text-xl font-semibold mb-3 text-white ${service.color} px-2 py-1 rounded`}>
                {service.title}
              </h3>
              <p className="text-gray-700 mt-2 flex-grow">{service.description}</p>
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
