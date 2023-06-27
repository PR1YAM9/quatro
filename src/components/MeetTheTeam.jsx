import React from 'react'
import sanyaImg from '../images/sanya 1.png'
import priyamImg from '../images/priyam 1.png'
import laibaImg from '../images/Laiba 1.png'
import aadharImg from '../images/aadhar 1.png'
import linkedin from '../images/linked.svg'
import github from '../images/codicon_github-inverted.svg'
import hand from '../images/Waving Hand Light Skin Tone.png'
import sanImg from '../images/ph_link-bold.png'
import aadharPhone from '../images/aadharPhone.png'
import priyamPhone from '../images/priyamPhone.png'
import laibaPhone from '../images/LaibaPhone.png'
import sanyaPhone from '../images/sanyaPhone.png'



const MeetTheTeam = () => {

    const data=
    [
        {
            id: 1,
            imgSrc: sanyaImg,
            name: "Sanya Malhotra",
            desig: "Designer",
            linked:  "https://www.linkedin.com/in/sanya-malhotra-a26605195/",
            gitlink: "https://sanyamalhotra.notion.site/Hey-there-de12a51d919944bc830c5c686722b144?pvs=4",
            colour:  "#B54B41",
            imgSrcPhone: sanyaPhone
        },
        {
            id: 2,
            imgSrc: priyamImg,
            name: "Priyam Maini",
            desig: "Developer",
            linked:  "https://www.linkedin.com/in/priyam-maini-9730a419b/",
            gitlink: "https://github.com/PR1YAM9",
            colour:  "#C6AF5E",
            imgSrcPhone: priyamPhone
        },
        {
            id: 3,
            imgSrc: laibaImg,
            name: "Laiba Ahsan",
            desig: "Developer",
            linked:  "https://www.linkedin.com/in/laiba-ahsan-8a913a23a",
            gitlink: "https://github.com/laibaahsan27",
            colour:  "#A491DD",
            imgSrcPhone: laibaPhone
            
        },
        {
            id: 4,
            imgSrc: aadharImg,
            name: "Aadhar Goel",
            desig: "Developer",
            linked:  "https://www.linkedin.com/in/aadhar-goel-b7173919b/",
            gitlink: "https://github.com/aadhar2003",
            colour:  "#6C6C6C",
            imgSrcPhone: aadharPhone

        }
    ]


  return (
    <div className='mttCover' id="about">
        <div className="mttheading">
            <p style={{fontWeight:'bold'}}>Meet The <span style={{color:'#2CB67D'}}>Team</span><img style={{width:"40px",marginLeft:'10px', marginBottom:'-6px'}} src={hand} alt="" /></p>
        </div>
        <div style={{fontFamily:"Inter", fontSize:"17px",display:'flex'}}>
            <div className='mttP' style={{color:"#92A59D" ,textAlign:'center',margin:'0 auto'}}>Our dedicated team of designer and developers are committed to bringing your vision to life, from the <span style={{fontWeight:'bold'}}>initial concept to the final development.</span> Whether you're a small business owner, an aspiring entrepreneur, or an individual with a dream, we're here to create digital experiences that leave a lasting impact.</div>
        </div>
        <div className='mttUs'>
            {data.map((data)=>{
                return(
                <div className='mttInner' key={data.id}>
                

                    <div className='mttImage'><img className='mttimg' src={data.imgSrc} alt={data.name} /></div>


                    <div className='mttContent'>
                    <button className='mttName' style={{backgroundColor:`${data.colour}` ,justifyContent:'center'}}><span style={data.id===1 ? {padding:'0px'} : {padding:"13px"}}>{data.name}</span></button>
                    <div className='mttDesig' style={{display: 'flex',justifyContent:'center', paddingTop:'10px'}}>
                        <div className='desig'>{data.desig}</div>
                        <div className='mttlogo' style={{padding:'0 5px'}}><a target="_blank" rel='noreferrer' href={data.linked}><img src={linkedin} alt="linLogo" /></a></div>
                        <div className='mttlogo'><a target="_blank" rel='noreferrer' href={data.gitlink}><img src={data.colour==='#B54B41'?sanImg:github} alt="linLogo" /></a></div>
                    </div>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default MeetTheTeam