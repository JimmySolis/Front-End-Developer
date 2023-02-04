import React from 'react';
import mySocialGIF from "../../img/mySocial.gif";
import { motion } from "framer-motion";



const mySocialPage = () => {
  return (
  <motion.div 
    initial={{scaleY:0}} 
    animate={{ scaleY:1 }} 
    exit={{ scaleY: 0 }} 
    transition={{ duration: .3 }}
    >
    <div style={{ display: 'flex'}}>

      <div style={{ width: '40%', padding: '80px', marginTop: '32px'}}>
       <a href="https://github.com/JimmySolis/MySocialAPI" target="_blank"> <img src= {mySocialGIF} alt="your-image-description-here" /> </a> 
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
        Here  we are fixing the problem how to modify a database through api calls. 
        This is strictly done through the backend where we create specific CRUD routes that will create, delete, upload and read data we want.
        For this specific project I needed to make a route for a socail app where people can create a profile and add friends, update user info, and create as well as delete profiles.
        The trickiest part is setting up all the dependencies and having the correct ports connected to access the mongoDB server.
          </h2>
        </div>

        <div  style={{ fontWeight: 'bold', marginTop: '16px', fontFamily:'Chakra Petch'}}>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}>
               I began by writing out all my routes on paper.
               Makeing sure I had a visual of what models I needed.
               I worked on the requirements I needed inorder to assure I would be able to create an account.
               Once I had a plan next I created my server page and cheked the connection to mondoDB.
               After, I finished up the models and created the routes to be about to make profiles.
               Finally, I tested the all the routes to make sure they all worked and I was finish with the project.
              </h2>
        </div>

      </div>
    </div>
    </motion.div>
  );
};

export default mySocialPage;