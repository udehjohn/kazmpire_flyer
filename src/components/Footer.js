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
            <a href='https://instagram.com/CinemasNG'><Instagram/></a>
            <a href='https://youtube.com/@CinemasNG'><Youtube/></a>
            <a href='https://wa.me/2348120252493'><Whatsapp/></a>
            <a href='https://t.me/CinemasNG'><Telegram/></a>
            <a href='https://facebook.com/KazMPIRE'><FacebookIcon/></a>
            <a href='https://twitter.com/CinemasNG'><Twitter/></a>          
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