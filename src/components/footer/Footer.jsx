import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="relative py-10 bg-[#192d34] border-t border-gray-800 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Copyright */}
          <div className="w-full md:w-1/2 lg:w-3/12 mb-8">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-4">
                <Logo width="100px" />
              </div>
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Developed by Aayush Gupta.
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full md:w-1/2 lg:w-2/12 mb-8">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Company
            </h3>
            <ul>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-gray-300" to="/">
                  Features
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-gray-300" to="/">
                  Pricing
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-gray-300" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium hover:text-gray-300" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full md:w-1/2 lg:w-2/12 mb-8">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Support
            </h3>
            <ul>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-gray-300" to="/">
                  Account
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-gray-300" to="/">
                  Help
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-gray-300" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium hover:text-gray-300" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full md:w-1/2 lg:w-2/12 mb-8">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Legals
            </h3>
            <ul>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-gray-300" to="/">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-gray-300" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium hover:text-gray-300" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
