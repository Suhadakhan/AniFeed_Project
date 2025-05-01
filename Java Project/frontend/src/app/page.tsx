"use client"
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div className="relative w-full h-48 sm:min-h-screen bg-cover bg-center bg-no-repeat">
      <Image
        src="/photo.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>

      {/* Mission Section */}
      <div className="text-center py-8 bg-white bg-opacity-90 rounded-lg transition duration-300 hover:bg-opacity-100">
        <h2 className="text-3xl mb-4 text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto sm:p-0 p-4">
          At AniFeed, we believe every empty bowl tells a story of a hungry soul. With your generous donations, we can fill these bowls and bring hope to helpless street animals who are longing for a kind touch and a warm meal. Together, lets transform their hunger into happiness—every contribution is a lifeline of love.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="text-center py-8">
        <h2 className="text-3xl mb-6 text-gray-800 ">Hearts in Need: A Glimpse into Their Struggle</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          <div className="relative">
            <Image
              src="/images/dog.jpg"
              alt="Animal 1"
              className="rounded-lg transform transition-all hover:scale-105 hover:shadow-lg"
              width={500}
              height={500}
            />
          </div>
          <div className="relative">
            <Image
              src="/images/cat.jpg"
              alt="Animal 2"
              className="rounded-lg transform transition-all hover:scale-105 hover:shadow-lg"
              width={500}
              height={500}
            />
          </div>
          <div className="relative">
            <Image
              src="/images/cow.jpg"
              alt="Human 1"
              className="rounded-lg transform transition-all hover:scale-105 hover:shadow-lg"
              width={500}
              height={500}
            />
          </div>
          <div className="relative">
            <Image
              src="/images/monkey.jpg"
              alt="Human 2"
              className="rounded-lg transform transition-all hover:scale-105 hover:shadow-lg"
              width={500}
              height={500}
            />
          </div>
          <div className="relative">
            <Image
              src="/images/dog2.jpg"
              alt="Animal 3"
              className="rounded-lg transform transition-all hover:scale-105 hover:shadow-lg"
              width={500}
              height={500}
            />
          </div>
          <div className="relative">
            <Image
              src="/images/cat2.jpg"
              alt="Animal 4"
              className="rounded-lg transform transition-all hover:scale-105 hover:shadow-lg"
              width={500}
              height={500}
            />
          </div>
          <div className="relative">
            <Image
              src="/images/cow2.webp"
              alt="Animal 5"
              className="rounded-lg transform transition-all hover:scale-105 hover:shadow-lg"
              width={500}
              height={500}
            />
          </div>
          <div className="relative">
            <Image
              src="/images/dog3.jpeg"
              alt="Animal 6"
              className="rounded-lg transform transition-all hover:scale-105 hover:shadow-lg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="text-center py-8 bg-gray-100 bg-opacity-90 rounded-lg transition duration-300 hover:bg-opacity-100">
        <h2 className="text-3xl mb-4 text-gray-800">Words of Compassion</h2>
        <blockquote className="italic text-xl text-gray-600 mx-auto max-w-2xl">
          Every empty bowl is a silent cry for help; while saving one animal may not change the world, but it will change the world for that one animal, your kindness can transform their hunger into hope.
        </blockquote>
      </div>

      {/* Hero Section */}
      <section className="flex justify-center items-center min-h-[40vh] py-8 bg-white transform translate-y-5 transition-opacity duration-1000 ease-in-out">
        <div className="text-center max-w-4xl mx-auto sm:p-0 p-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Become a Guardian of Hope</h1>
          <p className="text-lg text-gray-600 leading-relaxed ">
            Every act of kindness counts! By participating in our mission, you not only help feed animals in need but also inspire others to take action. Lets create a ripple effect of compassion and love in our communities. Together, we can make a lasting impact on the lives of our furry friends.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
        <div className="relative">
          <Image
            src="/feed/feed1.png"
            alt="Feed Image 1"
            className="w-full h-52 object-cover rounded-lg shadow-md"
            width={500}
            height={300}
          />
        </div>
        <div className="relative">
          <Image
            src="/feed/feed3.png"
            alt="Feed Image 2"
            className="w-full h-52 object-cover rounded-lg shadow-md"
            width={500}
            height={300}
          />
        </div>
        <div className="relative">
          <Image
            src="/feed/feed5.png"
            alt="Feed Image 3"
            className="w-full h-52 object-cover rounded-lg shadow-md"
            width={500}
            height={300}
          />
        </div>
        <div className="relative">
          <Image
            src="/feed/feed2.png"
            alt="Feed Image 4"
            className="w-full h-52 object-cover rounded-lg shadow-md"
            width={500}
            height={300}
          />
        </div>
        <div className="relative">
          <Image
            src="/feed/feed4.png"
            alt="Feed Image 5"
            className="w-full h-52 object-cover rounded-lg shadow-md"
            width={500}
            height={300}
          />
        </div>
        <div className="relative">
          <Image
            src="/feed/feed6.png"
            alt="Feed Image 6"
            className="w-full h-52 object-cover rounded-lg shadow-md"
            width={500}
            height={300}
          />
        </div>
      </div>

      {/* Donation Section */}
      <div className="text-center py-8">
        <h2 className="text-3xl mb-4 text-gray-800">Fill the Bowls</h2>
        <p className="text-lg text-gray-700 mb-6">Help us nourish the hungry souls in our community. Every contribution makes a difference!</p>
        <button className="bg-green-500 text-white px-8 py-3 rounded-md text-xl transition-all transform hover:bg-green-600 hover:scale-105">
          <a href="/donate">Donate Now</a>
        </button>
      </div>

      {/* Contribution Section */}
      <div className="text-center py-8 bg-gray-100 bg-opacity-90 rounded-lg">
        <h2 className="text-3xl mb-4 text-gray-800">More Ways to Contribute</h2>
        <p className="text-lg text-gray-700 mb-6 sm:p-0 p-4">Donation is not just about money; it is about filling the bowls in every way possible. Here’s how you can help:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
            <Image
              src="/images/donation.png"
              alt="Food Donations"
              className="h-12 mx-auto mb-4"
              width={50}
              height={50}
            />
            <h3 className="text-xl text-gray-800 mb-2">Food Donations</h3>
            <p className="text-gray-600">Contribute pet food or meals for the needy.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
            <Image
              src="/images/time.png"
              alt="Your Time"
              className="h-12 mx-auto mb-4"
              width={50}
              height={50}
            />
            <h3 className="text-xl text-gray-800 mb-2">Your Time</h3>
            <p className="text-gray-600">Volunteer to feed animals in your area and share your experience with us.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
            <Image
              src="/images/story.png"
              alt="Story Sharing"
              className="h-12 mx-auto mb-4"
              width={50}
              height={50}
            />
            <h3 className="text-xl text-gray-800 mb-2">Story Sharing</h3>
            <p className="text-gray-600">Encourage others by sharing your feeding stories and memories.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
            <Image
              src="/images/money.png"
              alt="Financial Support"
              className="h-12 mx-auto mb-4"
              width={50}
              height={50}
            />
            <h3 className="text-xl text-gray-800 mb-2">Financial Support</h3>
            <p className="text-gray-600">If you can’t volunteer, monetary donations are always welcome to help feed those in need.</p>
          </div>
        </div>
        <p className="text-lg text-gray-700 mt-6">Join our mission to fill every bowl with love and compassion!</p>
      </div>
    </div>
  );
};

export default Page;












// "use client";
// import { useState } from "react";

// const Page = () => {
//   const [formOneData, setFormOneData] = useState({
//     location: "",
//     animalType: "",
//     time: "",
//   });

//   const [formTwoData, setFormTwoData] = useState({
//     name: "",
//     contactNo: "",
//     address: "",
//     time: "",
//   });

//   const [showFormOne, setShowFormOne] = useState(true);

//   const handleFormOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormOneData({
//       ...formOneData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFormTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormTwoData({
//       ...formTwoData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle form one submission (Location and Animal Type)
//   const handleFormOneSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:8080/api/location/add", {
//       method: "POST",
//       body: JSON.stringify(formOneData),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await res.json();
//     console.log(data);
//   };

//   // Handle form two submission (User Details)
//   const handleFormTwoSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:8080/api/ani/register", {
//       method: "POST",
//       body: JSON.stringify(formTwoData),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await res.json();
//     console.log(data);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <button
//         onClick={() => setShowFormOne(true)}
//         className="bg-blue-500 text-white py-2 px-4 rounded"
//       >
//         Share Location
//       </button>
//       <button
//         onClick={() => setShowFormOne(false)}
//         className="bg-green-500 text-white py-2 px-4 rounded ml-4"
//       >
//         Join the Cause
//       </button>

//       {showFormOne ? (
//         <form onSubmit={handleFormOneSubmit} className="mt-4">
//           <input
//             type="text"
//             name="location"
//             value={formOneData.location}
//             onChange={handleFormOneChange}
//             placeholder="Location"
//             className="block p-2 mt-2 border border-gray-300"
//           />
//           <input
//             type="text"
//             name="animalType"
//             value={formOneData.animalType}
//             onChange={handleFormOneChange}
//             placeholder="Animal Type"
//             className="block p-2 mt-2 border border-gray-300"
//           />
//           <input
//             type="text"
//             name="time"
//             value={formOneData.time}
//             onChange={handleFormOneChange}
//             placeholder="Time"
//             className="block p-2 mt-2 border border-gray-300"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
//           >
//             Submit
//           </button>
//         </form>
//       ) : (
//         <form onSubmit={handleFormTwoSubmit} className="mt-4">
//           <input
//             type="text"
//             name="name"
//             value={formTwoData.name}
//             onChange={handleFormTwoChange}
//             placeholder="Your Name"
//             className="block p-2 mt-2 border border-gray-300"
//           />
//           <input
//             type="text"
//             name="contactNo"
//             value={formTwoData.contactNo}
//             onChange={handleFormTwoChange}
//             placeholder="Contact No"
//             className="block p-2 mt-2 border border-gray-300"
//           />
//           <input
//             type="text"
//             name="address"
//             value={formTwoData.address}
//             onChange={handleFormTwoChange}
//             placeholder="Address"
//             className="block p-2 mt-2 border border-gray-300"
//           />
//           <input
//             type="text"
//             name="time"
//             value={formTwoData.time}
//             onChange={handleFormTwoChange}
//             placeholder="Time"
//             className="block p-2 mt-2 border border-gray-300"
//           />
//           <button
//             type="submit"
//             className="bg-green-500 text-white py-2 px-4 mt-4 rounded"
//           >
//             Submit
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Page;
