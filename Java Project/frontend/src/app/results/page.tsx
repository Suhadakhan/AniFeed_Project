"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// Define the Result type (for TypeScript)
interface Result {
  fed: number;
  filled: number;
  covered: number;
  contributed: number;
  registered: number;
  shared: number;
}

const Page: React.FC = () => {
  // State to store statistics
  const [result, setResult] = useState<Result | null>(null); // Store the fetched result
  const [error, setError] = useState<string | null>(null); // Handle errors if any

  useEffect(() => {
    // Replace the below `id` with the correct ObjectId for your document
    const resultId = "67b1dce1d295fc0700e90dce"; // Example ObjectId

    // Fetch the data from the backend API
    fetch(`http://localhost:8080/api/result/${resultId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .then((data) => {
        setResult(data); // Set the fetched result
      })
      .catch((err) => {
        setError(err.message); // Handle any errors
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Show error if something goes wrong
  }

  if (!result) {
    return <div>Loading...</div>; // Show loading state until data is fetched
  }

  return (
    <div className="p-10 max-w-4xl mx-auto text-center bg-white rounded-lg shadow-lg sm:my-8">
      <h1 className="text-3xl font-bold mb-6">Results and Impact</h1>

      <div className="mb-10 text-lg text-gray-600">
        <p>
          Thank you for your support! Our mission to feed street animals is just getting started. We’re currently collecting donations, and we’ll be sharing our results and impact soon!
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Current Status</h2>
        <p className="text-lg text-gray-600 mb-6">Stay tuned for updates on our feeding missions!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold text-green-500">Total Animals Fed</h3>
            <p className="text-2xl font-bold text-gray-800">{result.fed}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold text-green-500">Total Bowls Filled</h3>
            <p className="text-2xl font-bold text-gray-800">{result.filled}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold text-green-500">Locations Covered</h3>
            <p className="text-2xl font-bold text-gray-800">{result.covered}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold text-green-500">Volunteer Hours Contributed</h3>
            <p className="text-2xl font-bold text-gray-800">{result.contributed}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold text-green-500">Volunteer Registered</h3>
            <p className="text-2xl font-bold text-gray-800">{result.registered}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold text-green-500">Stories Shared</h3>
            <p className="text-2xl font-bold text-gray-800">{result.shared}</p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">The Impact of Your Contributions</h2>
        <p className="text-lg text-gray-600 mb-4">
          Your donations and volunteer efforts will have a lasting impact on the lives of street animals. Once our feeding missions commence, we’ll share heartfelt stories and testimonials from volunteers and community members who are directly involved.
        </p>
        <p className="text-lg text-gray-600">
          Together, we can create a community of compassion and care. Check back soon to see how you have made a difference!
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Get Involved!</h2>
        <p className="text-lg text-gray-600">
          If you’d like to volunteer or contribute, please visit our{' '}
          <Link href="/get-involved">
            <span className="text-green-500 hover:underline">Get Involved</span>
          </Link>{' '}
          page.
        </p>
      </div>
    </div>
  );
};

export default Page;
