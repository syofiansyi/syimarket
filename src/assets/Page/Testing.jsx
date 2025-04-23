import React from 'react';

const Testing = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">E-Commerce Store</h1>
        </div>
      </header>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold">Product 1</h3>
              <p className="text-gray-600">$29.99</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
            </div>
            {/* Product Card */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold">Product 2</h3>
              <p className="text-gray-600">$39.99</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
            </div>
            {/* Product Card */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold">Product 3</h3>
              <p className="text-gray-600">$49.99</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white shadow mt-10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-gray-600">© 2023 E-Commerce Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Testing;