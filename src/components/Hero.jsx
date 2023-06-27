import React from 'react'
import BG from '../images/stickers grouped positions.png'
import BgSmall from '../images/sticker group hero(phone).png'

export default function Hero() {
  return (
    <>
    <div className='heroCon1'>
        <div>
            <img className='heroIcons' src={BG} alt="" />
        </div>
        <p className='heroTxt'>one-stop destination for transf &nbsp;  rming your ideas into stunning, functional websites that captivate your audience.</p>
    </div>

    <div className='heroCon2'>
        <div>
            <img className='heroIcons2' src={BgSmall} alt="" />
        </div>
        <p className='heroTxt2'>one-stop destination for transf &nbsp;&nbsp;rming your ideas into stunning, functional websites that captivate your audience.</p>
    </div>
    
    
    
    </>
  )
}
