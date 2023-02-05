import React from "react";

const MenuItem = ({ name, price }) => {
  return (
    <div className="text-center uppercase flex items-center justify-between md:max-w-[50%] w-full m-auto py-1 px-6 ">
      <span className="text-2xl block text-[#483729]">{name}</span>
      <span className="block text-2xl text-[#483729]">${price}</span>
    </div>
  );
};

export default MenuItem;
