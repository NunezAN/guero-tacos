import React from "react";

const SpecialItem = ({ name, price }) => {
  return (
    <div className="text-center uppercase flex flex-col items-center justify-between w-full m-auto py-1 px-6">
      <span className="text-2xl block text-[#483729]">{name}</span>
      <span className="block text-2xl text-[#483729]">${price}</span>
    </div>
  );
};

export default SpecialItem;
