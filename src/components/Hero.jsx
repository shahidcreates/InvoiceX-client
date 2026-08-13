import React from 'react'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-linear-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <span className="inline-block mb-5 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            Simple. Fast. Professional.
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Create Professional
            <span className="text-indigo-600"> Invoices </span>
            in Seconds
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            InvoiceX makes invoice creation simple. Create, manage,
            download and share professional invoices from one place.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/register"
              className="px-7 py-3.5 bg-indigo-600 text-white rounded-xl text-center font-medium hover:bg-indigo-700 transition"
            >
              Create Free Invoice
            </Link>

            <a
              href="#how-it-works"
              className="px-7 py-3.5 border border-gray-300 rounded-xl text-center font-medium hover:bg-gray-50 transition"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-8 flex gap-6 text-sm text-gray-500">
            <span>✓ Easy to use</span>
            <span>✓ Fast</span>
            <span>✓ Professional</span>
          </div>
        </div>

        {/* Right Invoice Preview */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 max-w-md mx-auto hover:shadow-blue-400">

            <div className="flex justify-between items-center border-b pb-5">
              <div>
                <h2 className="text-xl font-bold">
                  Invoice<span className="text-indigo-600">X</span>
                </h2>
                <p className="text-sm text-gray-500">
                  Professional Invoice
                </p>
              </div>

              <span className="text-sm font-medium text-indigo-600">
                #INV-1024
              </span>
            </div>

            <div className="py-6">
              <div className="flex justify-between text-sm mb-5">
                <div>
                  <p className="font-semibold">Bill To</p>
                  <p className="text-gray-500">John Doe</p>
                </div>

                <div className="text-right">
                  <p className="font-semibold">Date</p>
                  <p className="text-gray-500">12 Aug 2026</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Website Development</span>
                  <span>₹15,000</span>
                </div>

                <div className="flex justify-between">
                  <span>UI Design</span>
                  <span>₹8,000</span>
                </div>

                <div className="flex justify-between">
                  <span>Hosting</span>
                  <span>₹2,000</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-5 flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="text-2xl font-bold text-indigo-600">
                ₹25,000
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
