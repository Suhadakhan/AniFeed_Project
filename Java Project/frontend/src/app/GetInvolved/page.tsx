"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Location {
  location: string;
  animalType: string;
  time: string;
}

interface Volunteer {
  userName: string;
  contactNumber: string;
  address: string;
  startTime: string;
  endTime: string;
}

const Page: React.FC = () => {
  const [locationData, setLocationData] = useState({ location: '', animalType: '', time: '' });
  const [volunteerData, setVolunteerData] = useState({ userName: '', contactNumber: '', address: '', startTime: '', endTime: '' });
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [submittedLocations, setSubmittedLocations] = useState<Location[]>([]);
  const [submittedVolunteers, setSubmittedVolunteers] = useState<Volunteer[]>([]);

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  const countdownDuration = 5 * 24 * 60 * 60 * 1000; // 5 days

  useEffect(() => {
    initializeCountdown();
    fetchSubmittedData();
  }, []);

  const initializeCountdown = () => {
    const storedEndTime = localStorage.getItem('endTime');
    const endTime = storedEndTime ? parseInt(storedEndTime, 10) : Date.now() + countdownDuration;

    if (!storedEndTime) {
      localStorage.setItem('endTime', endTime.toString());
    }

    const updateCountdown = () => {
      const totalSeconds = Math.floor((endTime - Date.now()) / 1000);
      if (totalSeconds < 0) {
        setIsFormDisabled(true);
        return;
      }

      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(() => {
      updateCountdown();
      if (Date.now() >= endTime) {
        clearInterval(interval);
        setIsFormDisabled(true);
        localStorage.removeItem('endTime');
      }
    }, 1000);
  };

  const fetchSubmittedData = async () => {
    try {
      const locationsResponse = await fetch('http://localhost:8080/api/location');
      const locations = await locationsResponse.json();
      const volunteersResponse = await fetch('http://localhost:8080/api/ani');
      const volunteers = await volunteersResponse.json();
      setSubmittedLocations(locations);
      setSubmittedVolunteers(volunteers);
    } catch (error) {
      console.error('Error fetching submitted data:', error);
    }
  };

  const submitLocation = async () => {
    locationData.time += ' PM'; // Adjusting time format
    try {
      const response = await fetch('http://localhost:8080/api/location/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(locationData),
      });

      if (response.ok) {
        alert('Location submitted successfully!');
        fetchSubmittedData(); // Refresh the list after submission
      } else {
        alert('Failed to submit location.');
      }
    } catch (error) {
      console.error('Error submitting location:', error);
    }
  };

  const submitVolunteer = async () => {
    volunteerData.startTime += ' PM'; // Adjusting time format
    volunteerData.endTime += ' PM';
    try {
      const response = await fetch('http://localhost:8080/api/ani/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(volunteerData),
      });

      if (response.ok) {
        alert('Volunteer info submitted successfully!');
        fetchSubmittedData(); // Refresh the list after submission
      } else {
        alert('Failed to submit volunteer info.');
      }
    } catch (error) {
      console.error('Error submitting volunteer info:', error);
    }
  };

  return (
    <div className="get-involved font-sans text-gray-800">
      <Image
        src="/involve.png"
        alt="Join Our Mission"
        layout="responsive"
        width={1200}
        height={800}
        className="w-full h-auto"
      />

      <h2 className="text-center text-2xl my-4 text-blue-600">Join Our Mission to Feed the Needy</h2>

      <div className="countdown text-center my-4">
        <h3 className="text-lg text-yellow-500">Join Us in the Next <span>{timeLeft.days}</span> Days!</h3>
        <div className="timer text-xl text-red-500">
          <p>Time Left: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
        </div>
        {isFormDisabled && <p className="text-red-500 font-bold">Form submissions will be closed after the countdown ends.</p>}
      </div>

      <div className="impact-section flex justify-center my-8 px-4 sm:px-16 rounded-lg">
        <div className="impact-content text-center">
          <p className="text-xl mb-2">Every meal counts. Your involvement can change lives!</p>
          <p className="text-lg">Your contribution can fill multiple empty bowls! You can share the location of empty bowls near you or any places you know. If you want to fill these empty bowls with us, join us by sharing your information. We will contact you after the countdown ends to reach as many people as possible who want to join us. Remember, joining does not mean you have to be physically present; you can also share your stories and what you have done so that we can post on our site to encourage others.</p>
        </div>
      </div>

      <div className="flex justify-center flex-col sm:flex-row space-y-8 sm:space-x-8 p-6">
        {/* Locations Section */}
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-center text-2xl text-blue-600 mb-4">Animal Locations Shared</h3>
          <ul className="space-y-4">
            {submittedLocations.map((location, index) => (
              <li key={index} className="p-4 bg-teal-100 rounded-lg shadow-md hover:bg-teal-200 transition">
                <strong className="text-lg">Location:</strong> {location.location}
                <p className=" text-lg mt-2"> <strong>Animal found: </strong>{location.animalType}</p>
                <p className=" text-lg mt-2"> <strong>Time: </strong>{location.time}</p>
              </li>
            ))}
          </ul>
          <button className="w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded-md" onClick={() => setIsLocationModalOpen(true)}>
            Share Location
          </button>
        </div>

        {/* Volunteers Section */}
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-center text-2xl text-blue-600 mb-4">Our Wonderful Volunteers</h3>
          <ul className="space-y-4">
            {submittedVolunteers.map((volunteer, index) => (
              <li key={index} className="p-4 bg-teal-100 rounded-lg shadow-md hover:bg-teal-200 transition">
                <p className="text-lg"> <strong> Name:</strong> {volunteer.userName}</p>
                <p className="text-lg mt-2"> <strong>Contact:</strong> {volunteer.contactNumber ? volunteer.contactNumber.substring(0, 3) + 'XXXXX' : 'N/A'} </p>
                <p className=" text-lg mt-2"> <strong> Address:</strong> {volunteer.address ? volunteer.address.substring(0, 3) + '...' : 'N/A'}</p>
                <p className="text-lg mt-2"> <strong> Availability:</strong> {volunteer.startTime} to {volunteer.endTime} </p>
              </li>
            ))}
          </ul>
          <button className="w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded-md" onClick={() => setIsVolunteerModalOpen(true)}>
            Join the Cause
          </button>
        </div>
      </div>

      {/* Modal for Share Location */}
      {isLocationModalOpen && (
        <div className="modal fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="modal-content bg-white p-6 max-w-sm rounded-lg relative" onClick={(e) => e.stopPropagation()}>
            <span className="close absolute top-2 right-2 text-xl cursor-pointer" onClick={() => setIsLocationModalOpen(false)}>&times;</span>
            <h3 className="text-xl mb-4">Share Locations of Street Animals</h3>
            <form onSubmit={(e) => { e.preventDefault(); submitLocation(); setIsLocationModalOpen(false); }}>
              <label className="block mb-2 font-semibold">Where can we find animals?</label>
              <input type="text" placeholder="Location" value={locationData.location} onChange={(e) => setLocationData({ ...locationData, location: e.target.value })} required className="w-full p-2 mb-4 border border-gray-300 rounded-md" />

              <label className="block mb-2 font-semibold">What animals are present?</label>
              <input type="text" placeholder="Animals Found" value={locationData.animalType} onChange={(e) => setLocationData({ ...locationData, animalType: e.target.value })} required className="w-full p-2 mb-4 border border-gray-300 rounded-md" />

              <label className="block mb-2 font-semibold">When can they be found?</label>
              <input type="time" value={locationData.time} onChange={(e) => setLocationData({ ...locationData, time: e.target.value })} required className="w-full p-2 mb-4 border border-gray-300 rounded-md" />

              <button type="submit" disabled={isFormDisabled || !locationData.location || !locationData.animalType || !locationData.time} className="w-full py-2 px-4 bg-green-500 text-white rounded-md">Submit Location</button>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Join the Cause */}
      {isVolunteerModalOpen && (
        <div className="modal fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="modal-content bg-white p-6 max-w-sm rounded-lg relative" onClick={(e) => e.stopPropagation()}>
            <span className="close absolute top-2 right-2 text-xl cursor-pointer" onClick={() => setIsVolunteerModalOpen(false)}>&times;</span>
            <h3 className="text-xl mb-4">Become a Volunteer</h3>
            <form onSubmit={(e) => { e.preventDefault(); submitVolunteer(); setIsVolunteerModalOpen(false); }}>
              <label className="block mb-2 font-semibold">Your Name:</label>
              <input type="text" placeholder="Full Name" value={volunteerData.userName} onChange={(e) => setVolunteerData({ ...volunteerData, userName: e.target.value })} required className="w-full p-2 mb-4 border border-gray-300 rounded-md" />

              <label className="block mb-2 font-semibold">Your Contact:</label>
              <input type="text" placeholder="Phone/Email" value={volunteerData.contactNumber} onChange={(e) => setVolunteerData({ ...volunteerData, contactNumber: e.target.value })} required className="w-full p-2 mb-4 border border-gray-300 rounded-md" />

              <label className="block mb-2 font-semibold">Your Address:</label>
              <input type="text" placeholder="Address" value={volunteerData.address} onChange={(e) => setVolunteerData({ ...volunteerData, address: e.target.value })} required className="w-full p-2 mb-4 border border-gray-300 rounded-md" />

              <label className="block mb-2 font-semibold">Available Start Time:</label>
              <input type="time" value={volunteerData.startTime} onChange={(e) => setVolunteerData({ ...volunteerData, startTime: e.target.value })} required className="w-full p-2 mb-4 border border-gray-300 rounded-md" />

              <label className="block mb-2 font-semibold">Available End Time:</label>
              <input type="time" value={volunteerData.endTime} onChange={(e) => setVolunteerData({ ...volunteerData, endTime: e.target.value })} required className="w-full p-2 mb-4 border border-gray-300 rounded-md" />

              <button type="submit" disabled={isFormDisabled || !volunteerData.userName || !volunteerData.contactNumber || !volunteerData.address || !volunteerData.startTime || !volunteerData.endTime} className="w-full py-2 px-4 bg-green-500 text-white rounded-md">Submit Volunteer</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Page;
