"use client"
import React, { useState } from "react";
import Image from "next/image"; // Import the Image component from Next.js

const Page: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number | string>(0); // Allow both number and string
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleDonationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only digits to be entered
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setDonationAmount(value); // Set the value as string to allow flexible input
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      // Simulate an API call to submit the donation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setMessage(`Thank you for your generous donation of ₹${donationAmount}!`);
    } catch (e) {
      setMessage("Oops! Something went wrong. Please try again later.");
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-blue-100 min-h-screen py-12 px-6 sm:px-16">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-semibold text-center text-blue-700">
          Feed Hungry Street Animals
        </h1>

        <div className="text-center">
          {/* Use Image component here for optimization */}
          <Image
            src="/logo.png" // Replace with your image path
            alt="Hungry Street Animals"
            width={500} // Provide width for image optimization
            height={300} // Provide height for image optimization
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700 mb-6">
            Every small contribution helps in feeding hungry animals on the streets. Your donation can help provide food for those in need!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="donationAmount"
              className="block text-lg font-semibold text-blue-600"
            >
              Donation Amount (₹)
            </label>
            <input
              type="text" // Use type="text" to handle string input and number safely
              id="donationAmount"
              value={donationAmount}
              onChange={handleDonationChange}
              placeholder="Enter donation amount"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-blue-600"
            >
              Additional Message (Optional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Leave a message for the animals (Optional)"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting || donationAmount <= 0 || donationAmount === ""}
            className={`w-full py-3 text-white font-semibold rounded-lg ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isSubmitting ? "Processing..." : "Donate Now"}
          </button>
        </form>

        {message && (
          <div
            className={`mt-4 text-center p-4 rounded-lg ${
              message.includes("Oops") ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
