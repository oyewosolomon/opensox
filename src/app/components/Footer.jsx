import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* For Customers */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">For Customers</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/business" className="text-gray-500 hover:text-gray-700">
                Find a Professional
              </Link>
              <Link href="/#how-it-works" className="text-gray-500 hover:text-gray-700">
                How it works
              </Link>
              <Link href="/login" className="text-gray-500 hover:text-gray-700">
                Login
              </Link>
              <Link href="/mobile-app" className="text-gray-500 hover:text-gray-700">
                Mobile App
              </Link>
            </nav>
          </div>

          {/* For Professionals */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">For Professionals</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/#how-it-works" className="text-gray-500 hover:text-gray-700">
                How it works
              </Link>
              <Link href="/pricing/client" className="text-gray-500 hover:text-gray-700">
                Pricing
              </Link>
              <Link href="/connect" className="text-gray-500 hover:text-gray-700">
                Join as a Professional
              </Link>
              <Link href="/help" className="text-gray-500 hover:text-gray-700">
                Help centre
              </Link>
            
            </nav>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">About</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/about" className="text-gray-500 hover:text-gray-700">
                About Opensox
              </Link>
              <Link href="/careers" className="text-gray-500 hover:text-gray-700">
                Careers
              </Link>
              
              <Link href="/blog" className="text-gray-500 hover:text-gray-700">
                Blog
              </Link>
              <Link href="/press" className="text-gray-500 hover:text-gray-700">
                Press
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-gray-600">hello@Opensox.com</p>
              <p className="text-gray-900 font-semibold">080 3613 1267</p>
              <p className="text-gray-500 text-sm">(open 24 hours a day, 7 days a week)</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="/twitter" className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="/facebook" className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="/linkedin" className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2025 Opensox inc.{' '}
              <Link href="/terms" className="hover:text-gray-700">Terms & Conditions</Link>
              {' / '}
              <Link href="/cookie-policy" className="hover:text-gray-700">Cookie policy</Link>
              {' / '}
              <Link href="/privacy-policy" className="hover:text-gray-700">Privacy policy</Link>
            </p>

            {/* Trustpilot Score */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">TrustScore 4.1</span>
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <svg key={star} className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-sm text-gray-500">10,211 reviews</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;