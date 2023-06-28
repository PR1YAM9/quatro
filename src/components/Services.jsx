import React from 'react'

const data = [
    {
        text: 'DISCOVERING YOUR NEEDS',
        color: '#FBE7E3'
    },
    {
        text: 'IDEATING',
        color: '#FEC0B2'
    },
    {
        text: 'WIREFRAMING & PROTOTYPING',
        color: '#FF9680'
    },
    {
        text: 'TAKING FEEDBACK',
        color: '#FF6D4D'
    },
    {
        text: 'DEVELOPMENT',
        color: '#FF3D12'
    }
]

const Services = () => {
  return (
    <>
        <div className='sCover' id="Services">
            <div className='sLeft' style={{color: '#E1D9C7'}}>
                Ensuring that <span style={{color: '#2CB67D'}}>every pixel</span> and <span style={{color: '#2CB67D'}}>line of code</span> is meticulously crafted
            </div>
            <div className="sRight">
                {data.map((d)=>{
                    return (
                        <div className='dText' style={{borderLeft:`6px solid ${d.color}`}} >{d.text}</div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Services