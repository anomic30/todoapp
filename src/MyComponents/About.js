import React from 'react';
import './About.css';
import profileImage from '../img/pic2.svg';
// import '../../public/pic3.svg'

export const About = () => {
    return (
        <div class="main">
        <div class="left-main">
            <img src={profileImage} alt="avatar"/>
        </div>
        <div class="right-main">
            <h1>Hey there, its me Anom</h1>
            <p>This is my first React app,
                I hope you would like this as much as I do!
                <br></br>
                Do follow me in the below mentioned social medias...
            </p>
            <div class="icons">
                <a href="https://github.com/anomic30"><i class="fa fa-github" ></i></a>
                <a href="https://www.linkedin.com/in/anomic/"><i class="fa fa-linkedin" ></i></a>
                <a href="https://www.instagram.com/codermav/"><i class="fa fa-instagram" ></i></a>
            </div>
        </div>
        </div>
    )
}
