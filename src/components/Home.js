import React from 'react';
import profilePic from '../profile_pic.png';


const Home = () => {

    const onImageError = (e) => {
        e.target.src = profilePic
    }

    return (
        <div className='home-page'>
            <h1>Andromeda Akoulli</h1>
            <h3>Welcome to my portfolio</h3>
            <img className='pic' src={profilePic} alt='profile-pic' onError={onImageError}/>
        </div>
    );

};

export default Home;