import React from 'react';
import profilePic from '../profile_pic.png';


const Home = () => {

    const onImageError = (e) => {
        e.target.src = profilePic
    }

    return (
        <div className='home-page'>
            <div className='name-title'>
                <h1>Andromeda Akoulli</h1>
                <h2>Software Developer</h2>
                <h2 className='welcome'>Welcome to my portfolio</h2>
            </div>
            <img className='pic' src={profilePic} alt='profile-pic' onError={onImageError}/>
        </div>
    );

};

export default Home;