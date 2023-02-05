import React from "react";

const Header = () => {
  return (
    <div className="bg-teal-700 p-4 w-fill before:bg-teal-700">
      <div className="max-w-7xl mx-auto">
        <ul className="text-white text-2xl font-extrabold flex items-center justify-around">
          <li>
            <a href="#menu">MENU</a>
          </li>
          <li>
            <a href="">EVENT ROOM</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
