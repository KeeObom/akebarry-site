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


// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.js file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
