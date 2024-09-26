import React from "react";

function Rooms() {
  return (
    <>
      <div className="max-w-[1400px] h-[550px] bg-[#DBEAFE] my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 m-auto">
        <div className="lg:top-20 relative p-4  col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-bold ">Fine Interior Rooms</h2>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            ipsam rerum iusto excepturi similique minus?
          </p>
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-3 ">
          <img
            src="https://img.freepik.com/premium-photo/hotel_664434-4090.jpg"
            alt="/"
            className="p-2 w-full  object-cover max-h-[200px] md:max-h-[300px]"
          />
          <img
            src="https://img.freepik.com/premium-photo/beautiful-hotel-room-with-large-bed-sitting-area-private-balcony_14117-459800.jpg?w=996"
            alt="/"
            className="p-2 w-full h-full object-cover row-span-2 "
          />
          <img
            src="https://img.freepik.com/premium-photo/hotel_927472-12519.jpg?w=360"
            alt="/"
            className="p-2 w-full h-full object-cover max-h-[200px] md:max-h-[300px] "
          />
        </div>
      </div>
    </>
  );
}

export default Rooms;
