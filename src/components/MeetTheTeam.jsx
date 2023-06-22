import React from 'react'
import sanyaImg from '../images/sanya 1.png'
import priyamImg from '../images/priyam 1.png'
import laibaImg from '../images/Laiba 1.png'
import aadharImg from '../images/aadhar 1.png'
import linkedin from '../images/linked.svg'
import github from '../images/codicon_github-inverted.png'
import hand from '../images/Waving Hand Light Skin Tone.png'
import sanImg from '../images/ph_link-bold.png'


const MeetTheTeam = () => {

    const data=
    [
        {
            id: 1,
            imgSrc: sanyaImg,
            name: "Sanya Malhotra",
            desig: "Designer",
            linked:  "https://www.linkedin.com/in/priyam-maini-9730a419b/",
            gitlink: "https://github.com/PR1YAM9",
            colour:  "#B54B41"
        },
        {
            id: 2,
            imgSrc: priyamImg,
            name: "Priyam Maini",
            desig: "Developper",
            linked:  "https://www.linkedin.com/in/priyam-maini-9730a419b/",
            gitlink: "https://github.com/PR1YAM9",
            colour:  "#C6AF5E"
        },
        {
            id: 3,
            imgSrc: laibaImg,
            name: "Laiba Ahsan",
            desig: "Developper",
            linked:  "https://www.linkedin.com/in/priyam-maini-9730a419b/",
            gitlink: "https://github.com/PR1YAM9",
            colour:  "#A491DD"
        },
        {
            id: 4,
            imgSrc: aadharImg,
            name: "Aadhar Goel",
            desig: "Developper",
            linked:  "https://www.linkedin.com/in/priyam-maini-9730a419b/",
            gitlink: "https://github.com/PR1YAM9",
            colour:  "#6C6C6C"
        }
    ]


  return (
    <div className='mttCover'>
        <div className="mttheading">
            <p style={{fontWeight:'bold'}}>Meet The <span style={{color:'#2CB67D'}}>Team</span><img style={{width:"40px",marginLeft:'10px'}} src={hand} alt="" /></p>
        </div>
        <div style={{fontFamily:"Inter", fontSize:"17px"}}>
            <p style={{color:"#92A59D"}}>Our dedicated team of designer and developers are committed to bringing your vision to life, from the <span style={{fontWeight:'bold'}}>initial concept to the final development.</span> Whether you're a small business owner, an aspiring entrepreneur, or an individual with a dream, we're here to create digital experiences that leave a lasting impact.</p>
        </div>
        <div style={{display:'flex',justifyContent:"center",gap:'20px',paddingTop:'10px'}}>
            {data.map((data)=>{
                return(
                <div key={data.id}>
                    <div className='mttImage'><img src={data.imgSrc} alt={data.name} /></div>
                    <div className='mttName' style={{backgroundColor:`${data.colour}`, marginTop:'10px'}}>{data.name}</div>
                    <div className='mttDesig' style={{display: 'flex',justifyContent:'center', paddingTop:'10px'}}>
                        <div className='desig'>{data.desig}</div>
                        <div className='mttlogo' style={{padding:'0 5px'}}><a href={data.linked}><img src={linkedin} alt="linLogo" /></a></div>
                        <div className='mttlogo'><a href={data.gitlink}><img src={data.colour==='#B54B41'?sanImg:github} alt="linLogo" /></a></div>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default MeetTheTeam