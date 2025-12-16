import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from "../utils/api"

export default function Product() { // Component name capitalized convention
  const { id } = useParams();
  const p = products.find((p) => p.id === parseInt(id))

  if (!p) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
        <Link to="/products" className="text-blue-600 hover:text-blue-800 font-medium">
          &larr; Back to Shop
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
          <img
            src={p.image}
            alt={p.name}
            className="max-h-[400px] w-auto mix-blend-multiply object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">Premium Quality</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{p.name}</h1>
          <p className="text-4xl text-gray-900 font-bold mb-6">₹{p.price.toLocaleString()}</p>

          <div className="prose prose-sm text-gray-500 mb-8">
            <p>{p.description}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>

          <div className="flex gap-4">
            <Link
              to={`/buynow/${p.id}`}
              className="flex-1 bg-blue-600 text-white text-center px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30"
            >
              Buy Now
            </Link>
            <Link
              to="/products"
              className="px-6 py-4 border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Back
            </Link>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-6">
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              In Stock and ready to ship
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
