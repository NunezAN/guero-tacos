import React from "react";

const Header = () => {
  return (
    <div className="bg-teal-700 p-4 w-fill before:bg-teal-700">
      <div className="max-w-7xl mx-auto">
        <ul className="text-white text-2xl font-extrabold flex items-center justify-around">
          <li>
            <a className="hover:text-yellow-500" href="#menu">
              MENU
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-500" href="#events">
              EVENT ROOM
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-500" href="#contact">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
