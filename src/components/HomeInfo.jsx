import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

const InfoBox = ({text, link, btnText}) => (
    <div className ="info-box ">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <div className="mt-3 flex justify-center">
        <Link to={link} className ="neo-brutalism-white neo-btn text-sm !px-1 !py-0.5 mt-4">
            {btnText}
            <img src ={arrow} />
        </Link>
    </div>
  </div>
)

const renderContent = {
    1: (
     <h1 className="text-white sm:text-xl sm:leading-snug text-center neo-brutalism-purple py-1. px-64 mx-5">We are teen <span className="font-semibold">hackers</span> from <br/> <span className="font-semibold text-red-500">Lambert</span> High School! <br/></h1>
    ),
    2: (
        <InfoBox
            text = "Check out our mission and Leadership Team!"
            link = "/about"
            btnText= "Visit About Page"
        />
    ),
    3: (
        <InfoBox
            text = "Here you can preview our relevant projects and events!"
            link = "/projects"
            btnText= "Visit About Page"
        />
    ),
    4: (
        <InfoBox
            text = "Are you ready?"
            link = "https://groupme.com/join_group/62533963/Wc2Gk9nD"
            btnText= "Join  GroupMe"
        />
    ),
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}


export default HomeInfo
