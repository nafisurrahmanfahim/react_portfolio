import React from 'react'
import email from '../../assets/email-image.png'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

const ContactMeRight = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-12'>
            <img src={email} alt="email img" className='max-w-[300px]' />
            <ContactInfo/>
            <ContactSocial/>
        </div>
    )
}

export default ContactMeRight