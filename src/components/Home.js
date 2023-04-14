import React from 'react';
import profilePic from '../profile_pic.png';


const Home = () => {

    const onImageError = (e) => {
        e.target.src = profilePic
    }

    return (
        <div className='home-page'>
            <div className='name-title'>
                <div className='vertical-line'></div>
                <div className='title'>
                    <h1>Andromeda Akoulli</h1>
                    <h2>Software Developer</h2>
                </div>
                <h2 className='welcome'>Welcome to my portfolio</h2>
            </div>
            <img className='pic' src={profilePic} alt='profile-pic' onError={onImageError}/>
        </div>
    );

};

export default Home;