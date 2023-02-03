import React from 'react';
import quzGIF from "../../img/quizgif.gif";

const quzPage = () => {
  return (
    <div style={{ display: 'flex'}}>

      <div style={{ width: '40%', padding: '80px', marginTop: '32px'}}>
       <a href="https://jimmysolis.github.io/quizCoded/" target="_blank"> <img src= {quzGIF} alt="your-image-description-here" /> </a> 
       <figcaption style={{ color:'black', display:'flex', justifyContent:"center" }}>Click image to visit website</figcaption> 
      </div>

      <div style={{ width: '60%', padding: '16px', marginTop: '48px' }}>

        <div style={{ fontWeight: 'bold', fontFamily:'Chakra Petch' , marginTop: '32px'}}>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 style={{color:'black',fontFamily:'Chakra Petch'}}> HTML, CSS, JS, BootStrap</h2>
        </div>

        <div style={{ fontWeight: 'bold', marginTop: '16px', fontFamily:'Chakra Petch'}}>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}>
            Here we have a project where i was asked to recreate this webite from top to bottom.
            We wanted to have the weather for each city accessible through The Weather Apps API.
            I needed to get the lay about and even the gradient color from the example. 
            I am happy to say I got everything I needed. And even added the icons to represent the days.
          </h2>
        </div>

        <div  style={{ fontWeight: 'bold', marginTop: '16px', fontFamily:'Chakra Petch'}}>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}>
            The design process for this app was fairly easy. I started by looking at the devTool in chrome.
            Once I had an idea of how it was done I took it upon myself to set divs in the dementions that I saw resemble the example.
            After that I changed the viewport size and made sure it would fit well in all the most popular phones out there.   
            </h2>
        </div>

      </div>
    </div>
  );
};

export default quzPage;