import React from "react";

const Events = () => {
  return (
    <div id="events" className="bg-[#483729] text-white mt-8 pb">
      <h1 className="uppercase text-center text-5xl md:text-6xl font-extrabold font-libre pt-8">
        el guero
      </h1>
      <h1 className="text-white uppercase text-center text-xl md:text-4sxl font-extrabold font-libre">
        salon de eventos
      </h1>
      <video
        className="mt-4 m-auto rounded-xl md:p-2 md:max-w-4xl"
        loop
        controls
        playsinline="true"
        src="https://video.wixstatic.com/video/1a39aa_7a14a376c239466fb780b895d9bef905/1080p/mp4/file.mp4"
      ></video>
    </div>
  );
};

export default Events;
