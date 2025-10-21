import React from "react";
import { FaStore, FaHeart, FaLeaf } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-20 px-6 mt-10 md:px-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-indigo-700">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At <span className="font-semibold text-indigo-600">Uncle Shekabala</span>, we believe style and comfort
          should go hand in hand. Our mission is to bring you the latest in streetwear,
          sneakers, and jackets that define your individuality.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <FaStore className="text-indigo-600 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Premium Quality</h2>
          <p className="text-gray-500">
            Every product is carefully selected to meet our high standards of quality and design.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <FaHeart className="text-red-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Customer First</h2>
          <p className="text-gray-500">
            We care about your experience — from browsing to unboxing, it’s all about you.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <FaLeaf className="text-green-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Sustainable Style</h2>
          <p className="text-gray-500">
            We support brands that are eco-conscious and work toward a better planet.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 2024, ShoeVerse started as a small online store with a big dream —
          to make fashion accessible, expressive, and ethical. Today, we’ve grown into
          a global community of trendsetters who care about how they look and what they stand for.
        </p>
      </div>
    </section>
  );
};

export default React.memo(About);
