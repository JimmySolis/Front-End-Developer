import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function backEnd (){
    return(
        <motion.div 
        initial={{opacity:0}} 
        animate={{ opacity:1 }} 
        exit={{ opacity: 0 }} 
        transition={{ delay: .3 }}
        >
             <div className="containerFullPageBack">
                <div className="containerFrontGridBack">

           <Link to={"/Listed"}>  <button className="listed"></button> </Link> 

           <Link to={"/MySocial"}>  <button className="mySoc"></button> </Link> 

           <Link to={"/BackOfShop"}>  <button className="back"></button> </Link> 

           <Link to={"/TechBlog"}>  <button className="techBlo"></button> </Link> 

           </div>
            </div>
        </motion.div>
    )

}

export default backEnd;