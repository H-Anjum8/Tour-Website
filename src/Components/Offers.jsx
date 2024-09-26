import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import { TbWorldCheck } from "react-icons/tb";
import { GrUserExpert } from "react-icons/gr";

function Offers() {
  return (
    <>
      <div className="max-w-[1300px] items-center grid md:grid-cols-4 grid-cols-2 m-auto mt-5">
        <div className="flex p-3 ">
          <IoLocationOutline className="text-orange-500 pt-2 " size={50} />
          <div className="flex flex-col">
            <h1 className="font-bold text-xl p-2">OUR TRIPS</h1>
            <p className="text-nowrap-gray-300">are trailer are made for you</p>
          </div>
        </div>
        <div className="flex p-3 ">
          <MdOutlineThumbUpOffAlt className="text-orange-500 pt-2 " size={50} />

          <div className="flex flex-col">
            <h1 className="font-bold text-xl p-2">OUR PEOPLE</h1>
            <p className="text-nowrap-gray-300">are expert in their job</p>
          </div>
        </div>
        <div className="flex p-3 ">
          <TbWorldCheck className="text-orange-500 pt-2 " size={50} />
          <div className="flex flex-col">
            <h1 className="font-bold text-xl p-2">OUR COMMETMENT</h1>
            <p className="text-nowrap-gray-300">to responsible travel</p>
          </div>
        </div>
        <div className="flex p-3 ">
          <GrUserExpert className="text-orange-500 pt-2 " size={50} />
          <div className="flex flex-col">
            <h1 className="font-bold text-xl p-2">OUR LAGACY</h1>
            <p className="text-nowrap-gray-300">12 Years of Experiences</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
