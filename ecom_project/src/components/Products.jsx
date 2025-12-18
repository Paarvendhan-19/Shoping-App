import React, { useState, useEffect } from 'react'
import { fetchProducts } from '../utils/api'
import { Link } from 'react-router-dom'

export default function Products({ setcart, cart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    loadProducts();
  }, []);

  const addToCart = (product) => {
    const item = {
      id: product._id, // Use _id from MongoDB
      name: product.name,
      price: product.price,
      image: product.image
    };

    setcart([...cart, item]);
    // Optional: Add toast notification here
  }

  if (loading) {
    return <div className="text-center py-20 text-xl font-semibold">Loading products...</div>
  }

  return (
    <div className="py-10">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(p => (
          <div key={p._id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <div className="relative h-64 overflow-hidden bg-gray-100/50">
              {/* Use a placeholder if image fails, or object-contain to avoid crop */}
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate pr-2">{p.name}</h3>
                <span className="text-lg font-bold text-blue-600">₹{p.price}</span>
              </div>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2 h-10">{p.description}</p>

              <div className="flex gap-3">
                <button
                  onClick={() => addToCart(p)}
                  className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Add to Cart
                </button>
                <Link
                  to={`/product/${p._id}`}
                  className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
