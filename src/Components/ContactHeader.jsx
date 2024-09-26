import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';
function ContactHeader() {
  return (
    <>
     <div className='w-full h-[60px] bg-red-900 flex justify-between flex-wrap items-center text-white '>
        <div className='flex justify-between ml-5'>
        <FaPhoneAlt size={20} /> <p className='px-2 cursor-pointer'>0302-859454584</p>
        <MdOutlineEmail size={20} /> <p className='px-2 cursor-move'>PakistanView@gmail.com</p>
        </div>
        <div>

        </div><div className='flex justify-center   text-2xl mr-4 items-center '>
            <div className='flex justify-between sm:w-[300px]' >
            <FaFacebook  className="cursor-pointer"/>
          <FaInstagram className="cursor-pointer"/>
          <FaTwitter className="cursor-pointer" />
          <TiSocialPinterest size={30} className="cursor-pointer" />
            </div>
         
        </div>


     </div>
    </>
  )
}

export default ContactHeader