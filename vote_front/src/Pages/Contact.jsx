import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa"; // Import icons

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100  py-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 -mt-14">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Contact Us
        </h1>

        {/* Grid Layout for Form and Office Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Form Section */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-2xl text-blue-600 mr-3" />{" "}
              {/* Form Icon */}
              <h2 className="text-xl font-semibold text-gray-800">
                Get in Touch
              </h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Have questions or need support? Reach out to us using the form
              below, and we'll get back to you as soon as possible.
            </p>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              >
                <FaPaperPlane className="mr-2" /> {/* Send Icon */}
                Send Message
              </button>
            </form>
          </div>

          {/* Office Information Section */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-2xl text-blue-600 mr-3" />{" "}
              {/* Office Icon */}
              <h2 className="text-xl font-semibold text-gray-800">
                Our Office
              </h2>
            </div>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 mr-2" />{" "}
                {/* Address Icon */}
                <p>123 Election Street, City, State, ZIP Code</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-2" /> {/* Email Icon */}
                <p>Email: support@election.com</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-600 mr-2" /> {/* Phone Icon */}
                <p>Phone: +1 (123) 456-7890</p>
              </div>
            </div>

            {/* Map Embed (Optional) */}
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.95373531531664!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f4f4b1!2s123%20Election%20St%2C%20City%2C%20State%2C%20ZIP%20Code!5e0!3m2!1sen!2sus!4v1633023226784!5m2!1sen!2sus"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
