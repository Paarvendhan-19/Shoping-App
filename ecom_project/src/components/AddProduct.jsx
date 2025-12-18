import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        image: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const API_URL = import.meta.env.VITE_API_URL || "http://localhost:2796/api";
            const response = await fetch(`${API_URL}/Product`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            navigate('/products');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 dark:text-white">Add New Product</h1>

            {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                    <p className="text-red-700">{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Product Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Price (₹)
                    </label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        required
                        value={formData.price}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Image URL
                    </label>
                    <input
                        type="url"
                        name="image"
                        id="image"
                        required
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        rows={4}
                        required
                        value={formData.description}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
                >
                    {loading ? 'Adding...' : 'Add Product'}
                </button>
            </form>
        </div>
    );
}
