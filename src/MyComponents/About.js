import React from 'react';
import './About.css';
import profileImage from '../img/pic2.svg';
// import '../../public/pic2.svg'

export const About = () => {
    return (
        <div class="whole">
        <div class="container1">
            <div class="left-side">
                <img src={profileImage} alt=""/>
            </div>
            <div class="right-side">
                <h2>Developer</h2>
                <div class="name">
                    <h1>Anom Chakravorty</h1>
                </div>
                <span></span>
                <p>Hey everyone, this is my first React application. I hope you liked it as much as I do. <br></br>
            Do follow me in the below mentioned social media and platforms...</p>
            <div class="icons">
                <a href="https://github.com/anomic30"><i class="fa fa-github" ></i></a>
                <a href="https://www.linkedin.com/in/anomic/"><i class="fa fa-linkedin" ></i></a>
                <a href="https://www.instagram.com/codermav/"><i class="fa fa-instagram" ></i></a>
            </div>
            </div>
            </div>
        </div>
    )
}
