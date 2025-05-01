"use client"
import { useState } from 'react';
import { Story } from '../models/story'; // Create a story model file

// Assuming 'stories.json' is located in the public folder or somewhere you can import it
import storiesData from '../../../public/assets/stories.json';

const Page: React.FC = () => {
  const [stories, ] = useState<Story[]>(storiesData); // Set initial stories
  const [currentPage, setCurrentPage] = useState(0);
  const storiesPerPage = 1;

  const totalPages = Math.ceil(stories.length / storiesPerPage);

  const paginatedStories = stories.slice(currentPage * storiesPerPage, (currentPage + 1) * storiesPerPage);

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0); // Scroll to top when going to the previous page
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0); // Scroll to top when going to the next page
    }
  };

  return (
    <div className="p-5 max-w-3xl mx-auto text-left font-sans">
      <h2 className="text-4xl mb-5">Stories of Kindness</h2>

      <p className="text-lg text-gray-600 mb-5">
        Share your stories with street animals or fill their empty bowls.
        Read other people heartfelt stories and the happiness of feeding street animals.
        Just scroll up and enjoy!
      </p>

      {/* Share Your Story Button (Mailto link) */}
      <a
        href="mailto:anifeed.street@gmail.com?subject=Share Your Story&body=Hello,%0D%0A%0D%0AI would like to share my story...%0D%0A%0D%0AThanks!"
        className="bg-green-500 text-white py-2 px-6 rounded mb-8 cursor-pointer"
      >
        Share Your Story
      </a>

      <div className="space-y-5 mt-5">
        {paginatedStories.map((story, index) => (
          <div key={index} className="p-5 bg-gray-100 rounded shadow-lg transform transition-all">
            <h3 className="text-2xl text-gray-700 mb-2">{story.title}</h3>
            <h4 className="text-lg text-gray-500 mb-3">by {story.name}</h4>
            <img src={story.image} alt={story.title} className="max-w-full rounded mb-3" />
            <p className="text-gray-600">{story.story}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center my-5">
        <button
          onClick={prevPage}
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2 disabled:bg-gray-300"
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <span className="text-lg">Page {currentPage + 1} of {totalPages}</span>
        <button
          onClick={nextPage}
          className="bg-blue-500 text-white py-2 px-4 rounded ml-2 disabled:bg-gray-300"
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;
