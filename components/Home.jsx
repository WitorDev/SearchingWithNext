import React from "react";
import Searchbar from '../components/Searchbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10 px-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Lenny's</h1>
        <p className="mt-2 text-lg text-gray-700">
          Build responsive and modern UIs with React and Tailwind CSS
        </p>
      </header>

      <div>
        <Searchbar />
      </div>

      <section className="mt-20 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800">Feature One</h2>
          <p className="mt-4 text-gray-600">
            Tailwind CSS makes it easy to design and style responsive components
            without writing custom CSS.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800">Feature Two</h2>
          <p className="mt-4 text-gray-600">
            Using utility-first classes in Tailwind allows for faster
            development and cleaner code.
          </p>
        </div>
      </section>

      <footer className="mt-16 text-center">
        <p className="text-sm text-gray-600">
          &copy; 2025 Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
