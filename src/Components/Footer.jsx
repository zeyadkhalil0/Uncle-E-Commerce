import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Uncle Shekabala</h2>
          <p className="text-gray-400 leading-relaxed">
            Step into style and comfort — discover premium sneakers, jackets,
            and streetwear designed for your lifestyle.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#popular" className="hover:text-indigo-400 transition">Men's Collection</a></li>
            <li><a href="#popular" className="hover:text-indigo-400 transition">Women's Collection</a></li>
            <li><a href="#popular" className="hover:text-indigo-400 transition">New Arrivals</a></li>
            <li><a href="#offers" className="hover:text-indigo-400 transition">Hot Offers</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-400 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-3">Subscribe to get the latest deals and drops.</p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto pt-6 text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} ShoeVerse. All rights reserved.</p>

        <div className="flex gap-5 mt-4 md:mt-0">
          <a href="#" className="hover:text-indigo-400 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-indigo-400 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-indigo-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-indigo-400 transition"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
