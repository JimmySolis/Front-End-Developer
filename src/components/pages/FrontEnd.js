import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../assets/front.css";


function frontEnd (){
    return(
        <motion.div 
        initial={{scaleY:0}} 
        animate={{ scaleY:1 }} 
        exit={{ scaleY: 0 }} 
        transition={{ duration: .3 }}
        >
            <div className="containerFullPage">
                <div className="containerFrontGrid">

           <Link to={"/Mrk"}> <button className="mrk"></button> </Link> 

           <Link to={"/Blg"}> <button className="blg"></button> </Link>  

           <Link to={"/Del"} > <button className="del"></button> </Link> 

           <Link to={"/Old"}> <button className="old"></button> </Link>  

           <Link to={"/Wtw"}> <button className="wtw"></button> </Link> 

           <Link to={"/Quz"}> <button className="quz"></button> </Link>  

           

                </div>
            </div>
           

        </motion.div>
    )

}

export default frontEnd;