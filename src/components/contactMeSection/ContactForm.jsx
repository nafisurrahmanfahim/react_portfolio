import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    let publicKey = 'OrTF1pZyS3xMqr8ae';
    let serviceID = 'service_rnlcynp';
    let templateId = 'template_4ntja4e'

    emailjs
      .sendForm(serviceID, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


return (
  <div className="">
    <form className='flex flex-col gap-4 text-white' ref={form} onSubmit={sendEmail}>
      <input name='from_name' type="text" placeholder='Your Name' required className='h-12 rounded-lg bg-lightBrown px-2' />
      <input name='from_email' type="email" placeholder='Your Email' required className='h-12 rounded-lg bg-lightBrown px-2' />
      <textarea name='message' type='text' placeholder='Message' rows={9} cols={50} required className='rounded-lg bg-lightBrown p-2
        '/>
      <button type="submit" className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan transition-all duration-500'>Send Message</button>
    </form>
  </div>
)
}

export default ContactForm