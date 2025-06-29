import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex-col gap-4 text-white'>
      <SingleInfo text="nafisurrahmanfahim@gmail21.com" Image={MdOutlineEmail}/>
      <SingleInfo text="+880 161 172 0004" Image={FiPhone} />
      <SingleInfo text="Dhaka, Bangladesh" Image={IoLocationOutline} />
    </div>
  )
}

export default ContactInfo