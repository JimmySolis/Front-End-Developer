import React from 'react';
import mrkGIF from "../../img/mrkGIF.gif";

const mrkPage = () => {
  return (
    <div style={{ display: 'flex'}}>

      <div style={{ width: '40%', padding: '80px', marginTop: '32px'}}>
       <a href="https://mrkx.net/" target="_blank"> <img src= {mrkGIF} alt="your-image-description-here" /> </a> 
       <figcaption style={{ color:'black', display:'flex', justifyContent:"center" }}>Click image to visit website</figcaption> 
      </div>

      <div style={{ width: '60%', padding: '16px', marginTop: '48px' }}>

        <div style={{ fontWeight: 'bold', fontFamily:'Chakra Petch' , marginTop: '32px'}}>
          <h1> Technology Used </h1>
        </div>

        <div>
         <h2 style={{color:'black',fontFamily:'Chakra Petch'}}> HTML, CSS, JS</h2>
        </div>

        <div style={{ fontWeight: 'bold', marginTop: '16px', fontFamily:'Chakra Petch'}}>
          <h1> Problem Solving </h1>
        </div>

        <div>
        <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}> In order to have some feedback while the page is loading, I designed a preloader that disappears when all the images have loaded.
             The client wanted a minimalistic website to display some of his photography styles.
              My job was to display each collection in a unique and staggered way.
               This layout gives the viewers a pleasant experience when visiting his site.

          </h2>
        </div>

        <div  style={{ fontWeight: 'bold', marginTop: '16px', fontFamily:'Chakra Petch'}}>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}>
                I approached the creation of the website with a minimalist design in mind.
                I carefully selected a color palette that was understated and complemented the simple design. 
                My client was thrilled with the final result and appreciated the clean and modern look of the site. 
                The process was a smooth one as I worked closely with the client to ensure that their vision was realized. </h2>
        </div>

      </div>
    </div>
  );
};

export default mrkPage;