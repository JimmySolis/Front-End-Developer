import React from 'react';
import tecBlogGIF from "../../img/techBlogging.gif";
import { motion } from "framer-motion";
import "../../assets/backStyle/tec.css";



const TechBlogPage = () => {
  return (
  <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div className='tecPageDiv'>

      <div className='tecLeftDiv'>
       <a href="techbloggging.herokuapp.com/" target="_blank"> <img src= {tecBlogGIF} alt="your-image-description-here" className='tecSrc'/> </a> 
       <figcaption className='tecFigcaption' >Click image to visit website</figcaption> 
      </div>

      <div className='tecRightDiv{'>

        <div className='tecTechDiv'>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 className='tecTechDivH2'> Mongoose, MongoDB, JavaScript</h2>
        </div>

        <div className='tecProbDiv'>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 className='tecProbDivH2'> 
            With so much going on on social media, the tech industry needs a place to talk all about the new tech.
            A focus inviorment that provideds simple tech information of all the needed updates.

          </h2>
        </div>

        <div  className='tecDesDiv'>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 className='tecDesDivH2'>
            I wanted something simple for this project. 
            Once I had all the routes and the back end I made a signing or signup page.
            Then I made a home page where people can see all the posts donw.
            Finally, I made a profile page where users can write there own posts.

            </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default TechBlogPage;