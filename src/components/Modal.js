import React from 'react'
import design1 from '../images/design1.jpeg'
// import Register from './Register';


function Modal({visible, onClose}) {
  if(!visible) return null;  

  return (
    <div className='fixed inset-0 bg-gray-100 bg-opacity-30 backdrop-blur-sm justify-center items-center'>
      {/* <Register/> */}
      <div className='flex justify-center items-center pt-10'>
        <img src={design1} alt='design for referral' className='w-8/12 xs:w-9/12 sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-4/12 relative top-6'/>
        <button onClick={onClose} className='absolute top-5 right-10 text-4xl cursor-pointer text-white xs:text-sm'>X</button>
        <p></p>
      </div>
      <div className='flex justify-center py-7'>
        <button className='relative top-5 bg-red-500 py-2 px-16 outline-none border-none btn1 rounded-lg text-white'>Download</button>
      </div>
      <div></div>
    </div>
  )
}

export default Modal