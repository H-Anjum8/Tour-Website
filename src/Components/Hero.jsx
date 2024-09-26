import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen ">
        <img
          src={`${process.env.PUBLIC_URL}/images/cover-2.jpg`}
          alt="/"
          className="top-0 left-0 w-full h-screen  object-cover"
        />
        <div className="w-full absolute h-screen bg-black/30 top-0 left-0">
          <div className="w-full absolute h-full top-0 flex flex-col  text-white justify-center">
            <div className="md:left-[10%] max-w-[1100] m-auto absolute p-4">
              <p>All Inclusive</p>
              <h1 className=" py-2 lg:text-6xl md:text-5xl drop-shadow-2xl font-bold">
                Enjoyable Tour with Pakistan View
              </h1>
              <p className="max-w-[500px] text-xl py-2 drop-shadow-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut
                quis est, id consequuntur sequi ipsum vitae sit non
                exercitationem
              </p>
              <button className="bg-white text-black ">Reserve Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
