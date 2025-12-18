import React from 'react'
import { Link } from "react-router-dom"

export default function BuyNow() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Order Placed Successfully!</h2>
      <p className="text-gray-500 max-w-md mb-8">
        Thank you for your purchase. Your order has been confirmed and will be shipped soon. You will receive an email confirmation shortly.
      </p>
      <Link to="/products" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
        Continue Shopping
      </Link>
    </div>
  )
}
