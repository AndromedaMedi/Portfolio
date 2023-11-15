import React from 'react';
import profilePic from '../profile_pic3.png';


const Home = () => {

    const onImageError = (e) => {
        e.target.src = profilePic
    }

    return (
        <div className='home-page'>
            <div className='name-title'>
                <div className='vertical-line'></div>
                <div className='name-title-detail'>
                    <h1 className='name'>Andromeda Akoulli</h1>
                    <h2 className='title'>Software Developer</h2>
                </div>
                <div className='welcome'>
                    <h2 className='welcome-msg'>Welcome to my portfolio</h2>
                </div>
            </div>
            <img className='pic' src={profilePic} alt='profile-pic' onError={onImageError}/>
        </div>
    );

};

export default Home;