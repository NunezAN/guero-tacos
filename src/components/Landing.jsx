import React from "react";

const Landing = () => {
  return (
    <div className="w-full relative ">
      <img
        className="object-cover w-full h-full max-h-[600px] object-bottom"
        src="https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ></img>
      <div className="bg-teal-600 p-2">
        <h1 className="uppercase text-6xl md:text-7xl text-center font-extrabold w-[300px] mx-auto bg-teal-600 text-white">
          EL GUERO
        </h1>
        <h2 className="uppercase text-xl md:text-2xl text-center font-extrabold text-white">
          carnitas y barbacoa
        </h2>
      </div>
    </div>
  );
};

export default Landing;
