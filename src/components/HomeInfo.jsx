import React from 'react'
import { Link } from 'react-router-dom';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText} ➡️
        </Link>
    </div>
);

const renderContent = {
    1: (
        <div>
            <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Hi, I am Igor 👋
                <div className='sm:text-lg'>A software engineer from Israel</div>
            </h1>
        </div>
    ),
    2: (
        <InfoBox
            text={`Can do various things. Not as much as I wish I could do tho. 😎`}
            link={`/about`}
            btnText={`More info here`}
        />
    ),
    3: (
        <InfoBox
            text={`Been there done that. Might wanna check what I got`}
            link={`/projects`}
            btnText={`Portofolio here`}
        />
    ),
    4: (
        <InfoBox
            text={`Not sure what you need? Or mabye you already setup your mind?`}
            link={`/contact`}
            btnText={`Talk to me`}
        />
    ),
}

const HomeInfo = ({ currentStage, ...props }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo