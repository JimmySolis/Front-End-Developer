import React from 'react';
import listedGIF from "../../img/listed.gif";
import { motion } from "framer-motion";
import "../../assets/backStyle/listed.css"

const ListedPage = () => {
  return (
  <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div className='lisPageDiv'>

      <div className='lisLeftDiv'>
       <a href="listed.herokuapp.com/" target="_blank"> <img src= {listedGIF} alt="your-image-description-here" className='lisSrc'/> </a> 
       <figcaption className='lisFigcaption'>Click image to visit website</figcaption> 
      </div>

      <div className='lisRightDiv'>

        <div className='lisTechDiv'>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 className='lisTechDivH2'> React, Nodejs, JavaScript, Express, MondoDB, GraphQL</h2>
        </div>

        <div className='lisProbDiv'>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 className='lisProbDivH2'> 
        Have you ever needed to make a chrismas or a birthday list? Or have you ever needed to see what your mother wanted for her birthday? 
        Well, I want to solve that embaracing problem. The awkward asking what size arre you or what color do you want it will seize to exist.
        This application allows you to make a profile and list exactly what toy, shirt, or any other thing you may want to purchase. 
        Then people can visit your profile and buy it for you with out getting a single thing worng.
          </h2>
        </div>

        <div  className='lisDesDiv'>
            <h1>Design Proccess</h1>
        </div>
      
        <div>
            <h2 className='lisDesDivH2'>
            I was more interested in making the back-end of this project work so my design Emphasis was focused on creating list names an individual list items. 
        Each item would be filled with the necessary details to correctly identify the gift/object being bought. 
        I knew I wanted to incorporate a URL section because this way people can access exactly what the user needed.
        Super easy to use and super easy to understand. Like any other backend projects, I create a server page and connect to the GraphQL.
        GraphQL was extremely easy to use to make this process fast.
              </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default ListedPage;