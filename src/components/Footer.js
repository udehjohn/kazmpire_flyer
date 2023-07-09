import React from 'react'
import logo1 from '../images/cinemasng.png'
import logo2 from '../images/kazmpire.png'
import Instagram from '@mui/icons-material/Instagram';
import Youtube from '@mui/icons-material/YouTube';
import Whatsapp from '@mui/icons-material/WhatsApp';
import Telegram from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import Twitter from '@mui/icons-material/Twitter';


function Footer() {
  return (
    <div className='text-white footer'>
        <hr/>
        <div className='py-5 flex justify-center gap-5 social xs:text-xs'>
            <a href='instagram.com'><Instagram/></a>
            <a href='#'><Youtube/></a>
            <a href='#'><Whatsapp/></a>
            <a href='#'><Telegram/></a>
            <a href='#'><FacebookIcon/></a>
            <a href='#'><Twitter/></a>          
        </div>
        <div className='py-5 text-center foot xs:text-xs'>
            <div className='flex justify-center gap-3'>
                <p>All Rigths Reserved © 2023</p>
                <img src={logo1} alt='Cinemasng' className='xs:w-20'/>
            </div>
            <div className='flex justify-center gap-3 py-4'>
                <p>Proudly Pwered by</p>
                <img src={logo2} alt='KazMPIRE' className='xs:w-20'/>
            </div>
        </div>
    </div>
  )
}

export default Footer