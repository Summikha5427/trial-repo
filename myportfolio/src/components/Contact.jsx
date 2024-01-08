import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/57a89a37-3a8f-40d6-b121-1a45e587ddf3" className='flex flex-col max-w-[600px] w-full container'>
            <div className='p-4'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-300 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the Form or Send me an Email at - ksumia2131@gmail.com </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="8" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-purple-300 hover:border-purple-300 px-4 py-3 my-2 mx-auto flex items-center'>Collaborate</button>
        </form>
    </div>
  )
}

export default Contact