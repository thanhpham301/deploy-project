import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-500 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full sm:w-auto text-white text-center sm:text-left">
            <p className="text-sm">
              © 2023 Nike Factory made by Thanh Pham Team
            </p>
          </div>
          <div className="w-full sm:w-auto text-white text-center sm:text-right">
            <ul className="text-sm">
              <li>
                <a href="#" className="text-white hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-[20px] ">
        <button><i class="fab fa-facebook text-[30px] "></i></button>
        <button><i class="fab fa-instagram text-[30px] mx-8"></i></button>
        <button><i class="fab fa-twitter text-[30px]"></i></button>
      </div>
    </footer>
  );
};

export default Footer;
