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
        To keep up with the ever-evolving landscape of technology, it has become imperative to have a dedicated platform that allows for the discussion of the latest advancements in the field. 
        This platform should offer a streamlined user experience and provide straightforward, concise information that highlights important updates and developments in the tech industry.

          </h2>
        </div>

        <div  className='tecDesDiv'>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 className='tecDesDivH2'>
            For this project, I aimed to create a clean and straightforward user interface.
            After establishing the necessary routes and backend functionality, I developed a user login/signup page, a homepage displaying all posts, and a profile page where users can create their own posts.
            By keeping the design simple and intuitive, I ensured that users could quickly and easily access and engage with the platform's content.

            </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default TechBlogPage;