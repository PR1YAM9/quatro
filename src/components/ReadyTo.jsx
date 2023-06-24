import React from 'react'
import rtImg from '../images/Group 14.svg'


const ReadyTo = () => {
  return (
    <>
        <div className='rtCover'>
            <div><h1 className='rtHeading'>Ready to take the next step ?</h1></div>
            <div><h4 className='rtSecond'>We're just a message away!</h4></div>
            <div><h6 style={{margin: '0 auto', textAlign: 'center',display: 'flex', maxWidth:'81%'}} className='rtMain'>Whether you're interested in our services, have a project in mind, or simply want to connect, drop us a line. Our team is here and ready to assist you. Don't hesitate to get in touch with us today and let's start a conversation!</h6></div>
            <div style={{marginTop:'25px',}}><img src={rtImg} alt="" /></div>
        </div>
    </>
  )
}

export default ReadyTo