import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Import icons

function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Contact Information */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-1">Contact</h3>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-white" />
              <p className="text-sm">H00-W001-32, H00-W006-4</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-white" />
              <p className="text-sm">compt@introelectoriminilla.gov.in</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-white" />
              <p className="text-sm">info@electoriminilla.gov.in</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-white" />
              <p className="text-sm">W001-123-46, W001-123-47</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-1">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="/"
                  className="text-sm hover:text-blue-100 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm hover:text-blue-100 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm hover:text-blue-100 transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="text-sm hover:text-blue-100 transition duration-300"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className="text-sm hover:text-blue-100 transition duration-300"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-1">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-blue-100 transition duration-300"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-100 transition duration-300"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-100 transition duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-1">Feedback</h3>
            <p className="text-sm">
              We value your feedback. Please share your thoughts with us.
            </p>
            <a
              href="/contact"
              className="text-sm text-white hover:text-blue-100 transition duration-300"
            >
              Share Feedback
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-400 mt-4 pt-3 text-center">
          <p className="text-sm text-blue-100">
            &copy; {new Date().getFullYear()} Election Management System. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
