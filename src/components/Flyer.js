import React, {useState} from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Modal from './Modal';
import design1 from '../images/design1.jpeg';


function Flyer() {
  const [showModal, setShowModal] = useState(false)
  const handleOnClose = () => setShowModal(false)

  return (
    <div className='text-white'>
      <Modal onClose={handleOnClose} visible={showModal}/>
      <Navbar/>

        <div className='divflyer'>
          <div className='text-center'>
            <h1 className='text-2xl font-bold xs:text-lg pt-4'>Flyer Generator</h1>
            <p className='py-4 px-0 xs:text-xs'>Generate your customized flyer for KazMPIRE Overnight Movies</p>
          </div>
          <div className='flex justify-center'>
            <img src={design1} alt='Design1' className='md:w-9/12 xs:w-10/12 sm:w-9/12 lg:w-8/12 xl:w-6/12 img1'/>
          </div>
          <div className='flex justify-center py-7'>
            <button className='bg-red-500 py-3 px-32 outline-none border-none btn1 rounded-lg' onClick={()=>setShowModal(true)}>Download</button>
          </div>
        </div>  

      <Footer/>
    </div>
  )
}

export default Flyer
