import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-black py-8 px-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-8">
          {/* About Section */}
          <div className="footer-section flex-1 mb-4 md:mb-0 md:flex-none md:w-1/3 px-4">
            <h5 className="font-bold text-xl mb-4">About AniFeed</h5>
            <p className="text-gray-700">
              AniFeed is dedicated to feeding and caring for vulnerable street animals, ensuring they never go hungry. With your support, we can make a meaningful difference in their lives!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section flex-1 mb-4 md:mb-0 md:flex-none md:w-1/3 px-4">
            <h5 className="font-bold text-xl mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-700 hover:text-black transition-colors">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-700 hover:text-black transition-colors">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/GetInvolved">
                  <span className="text-gray-700 hover:text-black transition-colors">Get Involved</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section flex-1 mb-4 md:mb-0 md:flex-none md:w-1/3 px-4">
            <h5 className="font-bold text-xl mb-4">Contact Us</h5>
            <p className="text-gray-700">New Delhi, India</p>
            <p className="text-gray-700">Email: anifeed.street&#64;gmail.com</p>
            <p className="text-gray-700">Contact: (+91) 8882278236</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-300 pt-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
          </div>

          <div className="text-gray-700 text-sm">
            <p>&copy; {year} AniFeed. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
