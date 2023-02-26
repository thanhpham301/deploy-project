import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full sm:w-auto text-white text-center sm:text-left">
            <p className="text-sm">© 2023 Tailwind Toolbox</p>
          </div>
          <div className="w-full sm:w-auto text-white text-center sm:text-right">
            <ul className="text-sm">
              <li><a href="#" className="text-white hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="text-white hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;