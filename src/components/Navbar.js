import React from 'react'
import logo from '../images/cinemasng.png';

function navbar() {
  return (
    <div>
        <div className='flex justify-center'>
            <a href='https://google.com'><img src={logo} alt='Cinemasng logo' className='p-6 w-80 logo'/></a>
        </div>
        <hr className='pt-1'/>
    </div>
  )
}

export default navbar