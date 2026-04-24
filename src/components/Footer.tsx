"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-3">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-white font-semibold text-lg tracking-tight">
              vc<span className="text-gray-5">consulting</span>
            </Link>
            <p className="text-gray-5 text-sm mt-4 max-w-sm leading-relaxed">
              Transforming businesses through expert technology consulting
              and modern web development. From strategy to execution.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium text-gray-5 uppercase tracking-wider mb-4">
              Pages
            </h4>
            <div className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/clients", label: "Clients" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-5 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium text-gray-5 uppercase tracking-wider mb-4">
              Services
            </h4>
            <div className="space-y-3 text-sm text-gray-5">
              <p>Tech Consulting</p>
              <p>Web Development</p>
              <p>Cloud Solutions</p>
              <p>System Architecture</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-3 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-5 text-xs">
            &copy; {new Date().getFullYear()} VC Consulting. All rights reserved.
          </p>
          <p className="text-gray-4 text-xs">hello@vcconsulting.dev</p>
        </div>
      </div>
    </footer>
  );
}
