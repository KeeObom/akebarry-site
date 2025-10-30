import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo + About */}
        <div>
          <div className="flex items-center justify-center md:justify-start mb-3">
            <Image
              src="/images/AGS_logo_ref.svg"
              alt="Akebarry Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="font-semibold text-white text-lg">Akebarry Global Services Ltd</span>
          </div>
          <p className="text-sm">
            Experts in Fire Safety, HSE Consultancy & Workplace Protection.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/services" className="hover:text-white">Our Services</Link></li>
            <li><Link href="/verify-certificate" className="hover:text-white">Verify Certificate</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p className="text-sm">Email: akebarryglobalservices@gmail.com</p>
          <p className="text-sm">Phone: +234 803 341 8797</p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Akebarry Global Services Ltd. All rights reserved.
      </div>
    </footer>
  );
}
