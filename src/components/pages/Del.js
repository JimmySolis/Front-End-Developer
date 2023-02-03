import React from 'react';
import delGIF from "../../img/delVid.gif";

const delPage = () => {
  return (
    <div style={{ display: 'flex'}}>

      <div style={{ width: '40%', padding: '80px', marginTop: '32px'}}>
       <a href="https://delegantpoodlesanddoodles.com/" target="_blank"> <img src= {delGIF} alt="your-image-description-here" /> </a> 
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
        <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}>
            This website was made in efforts to bring joy to families. 
            We needed a way to display new puppies as well as have a place to have information about the breeds. 
            Couple that with photos and a way to inquire about the availability of pups.
            The client just need something done fast but pretty becasue she had a litter of pups going into two months. 
            She was please with the work and asked to getting starting on a bigger project where she will sale and promote her Schnauzer. 
          </h2>
        </div>

        <div  style={{ fontWeight: 'bold', marginTop: '16px', fontFamily:'Chakra Petch'}}>
            <h1>Design Proccess</h1>
        </div>

        <div>
            <h2 style={{color:'black', paddingRight: '64px', fontFamily:'Chakra Petch'}}>
            With short notice and a quick due date I needed to make sure I was building a website that had text that stood-out but was not overwhelming.
            On top of that I focused on the moblie version first beacuse I knew that my client would be texting the website to all her customers.
            There was nothing to challenging and I had a great time making sure every platform was well displayed.

             </h2>
        </div>

      </div>
    </div>
  );
};

export default delPage;