import React from 'react';
import tecBlogGIF from "../../img/techBlogging.gif";
import { motion } from "framer-motion";



const TechBlogPage = () => {
  return (
  <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div style={{ display: 'flex'}}>

      <div style={{ width: '40%', padding: '80px', marginTop: '32px'}}>
       <a href="techbloggging.herokuapp.com/" target="_blank"> <img src= {tecBlogGIF} alt="your-image-description-here" /> </a> 
       <figcaption style={{ color:'black', display:'flex', justifyContent:"center" }}>Click image to visit website</figcaption> 
      </div>

      <div style={{ width: '60%', padding: '16px', marginTop: '16px' }}>

        <div style={{ fontWeight: 'bold', fontFamily:'Chakra Petch' , marginTop: '32px'}}>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 style={{color:'black',fontFamily:'Chakra Petch'}}> Mongoose, MongoDB, JavaScript</h2>
        </div>

        <div style={{ fontWeight: 'bold', marginTop: '16px', fontFamily:'Chakra Petch'}}>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}> 
            With so much going on on social media, the tech industry needs a place to talk all about the new tech.
            A focus inviorment that provideds simple tech information of all the needed updates.

          </h2>
        </div>

        <div  style={{ fontWeight: 'bold', marginTop: '16px', fontFamily:'Chakra Petch'}}>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}>
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