import React from "react";
import './About.css'

const About = () => {
  return (
    <div class="about-container">
        <p class="about-name">ABOUT</p>
        <p>I am a software engineer inspired by accessible and efficient code. Utilizing a mindful approach to development, I return user-centric and reliable results. My previous work in academia informs my ability to translate complex ideas and jargon into comprehensible content. </p>
        <br></br>
        <p>When not working I love spending time outside, staying active, and cooking.</p>
        <br></br>
        <p>To find out more about me and my work, <a target="_blank" href="http://localhost:3000/#/contact">send me an email</a> or visit my <a target="_blank" href="https://github.com/adkowalkowski">Github</a> and <a target="_blank" href="https://www.linkedin.com/in/anthony-kowalkowski/">LinkedIn</a>.</p>
    </div>
  );
};

export default About;