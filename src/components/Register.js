import React from 'react'
import Footer from './Footer'
import Modal from './Modal';
import design1 from '../images/design1.jpeg';
import { useState } from 'react';

function Register() {
    const [showModal, setShowModal] = useState(false)
    const handleOnClose = () => setShowModal(false)

    const [name, setName] = useState('')
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div>
        <Modal onClose={handleOnClose} visible={showModal}/>
            <div className='divflyer'>
                <div className='text-center text-white'>
                    <h1 className='text-2xl font-bold xs:text-lg pt-4'>Flyer Generator</h1>
                    <p className='py-4 px-0 xs:text-xs'>Generate your customized flyer for KazMPIRE Overnight Movies</p>
                </div>
                <div className='flex justify-center'>
                    <img src={design1} alt='Design1' className='md:w-9/12 xs:w-10/12 sm:w-9/12 lg:w-8/12 xl:w-6/12 img1'/>
                </div>
                <div className='justify-center py-7 text-white text-center'>
                    <form onSubmit={handleSubmit}>
                        <label for='email'>Email or Username</label><br/><br/>
                        <input type='text' value={name} onChange={handleChange} className='w-6/12 xm:w-4/12 lg:w-4/12 md:w-4/12 outline-none border-0 rounded text-black py-2 text-center'/><br/><br/>
                    
                        <button className='bg-red-500 py-2 px-16 mx-16 outline-none border-none btn1 rounded-lg text-white' onClick={()=>setShowModal(true)}>Next</button>      
                        {/* console.log(name)      */}
                     </form>                                       
                </div> 
            </div>
            <Footer/>
    </div>
  )
}

export default Register