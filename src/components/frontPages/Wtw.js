import React from 'react';
import wtwGIF from "../../img/wtw.gif";
import { motion } from "framer-motion";
import "../../assets/frontStyle/wtw.css"


const wtwPage = () => {
  return (
    <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div className='wtwPageDiv'>

      <div className='wtwLeftDiv'>
       <a href="https://jimmysolis.github.io/WhatsTheWeather/" target="_blank"> <img src= {wtwGIF} alt="your-image-description-here" className='wtwSrc' /> </a> 
       <figcaption className='wtwFigcaption'>Click image to visit website</figcaption> 
      </div>

      <div className='wtwRightDiv'>

        <div className='wtwTechDiv'>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 className='wtwTechDivH2'> HTML, CSS, JS, BootStrap</h2>
        </div>

        <div className='wtwProbDiv{'>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 className='wtwProbDivH2'>
        Here we have a project where I was tasked with fully recreating a website. 
        Our objective was to provide accessible weather information for each city, which we achieved through The Weather Apps API. 
        To ensure an accurate recreation, I carefully studied the layout and gradient color scheme of the original website. 
        I'm pleased to report that I was able to replicate every detail, including adding icons to represent the forecast for each day.
          </h2>
        </div>

        <div className='wtwDesDiv' >
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 className='wtwDesDivH2'>
            The design process for this app began by analyzing the devTool in Chrome to gain an understanding of the underlying structure. 
            Following this, I meticulously placed divs in the dimensions that resembled the example layout. 
            Once the layout was established, I fine-tuned the viewport size to ensure the design was optimized for all popular mobile devices. 
            This meticulous approach helped ensure that the app is both visually appealing and user-friendly across a range of devices.
            </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default wtwPage;