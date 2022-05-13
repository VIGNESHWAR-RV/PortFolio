import { useEffect, useRef } from "react";
import "./skills.css";
import { useState } from "react";
import HTML from "../images/Skill-Images/HTML.webp";
import CSS from "../images/Skill-Images/CSS.webp";
import BootStrap from "../images/Skill-Images/BootStrap.webp";
import JS from "../images/Skill-Images/JS.webp";
import MUI from "../images/Skill-Images/MUI.webp";
import ReactJs from "../images/Skill-Images/ReactJS.webp";
import NodeJS from "../images/Skill-Images/NodeJs.webp";
import ExpressJs from "../images/Skill-Images/ExpressJs.webp";
import MySql from "../images/Skill-Images/MySql.webp";
import MongoDB from "../images/Skill-Images/MongoDB.webp";
import Postman from "../images/Skill-Images/Postman.webp";

export function Skills({setStyle}){

    const animate = useRef({marginTop:"100vh",opacity:"0"
                            //boxShadow:"-4vh -3.25vh 0vh 1.5vh rgb(207, 2, 2)"
                           });
    
    const [stylePop,setStylePop] = useState({});

    const handleResize = ()=>{
        if(window.innerWidth <= 900){
            setStylePop({marginTop:"100vh"});
        }
        else{
            setStylePop({});
        }
    }

    const handleOpen=()=>{
        if(window.innerWidth <= 900){
          return  setStylePop({marginTop:"0vh"})
         }
    }
    const handleClose=(e)=>{
      if(e.target.title === "showCase"){
        if(window.innerWidth <= 900){
         return  setStylePop({marginTop:"100vh"})
        }
      }
    }

   
useEffect(()=>{

    const handleTimeout=()=>{
        setTimeout(()=>{
            setStyle(animate.current);
        },100);
    }

    window.onloadeddata = handleTimeout();

    if(window.innerWidth <= 900){
        setStylePop({marginTop:"100vh"});
    }else{
        setStylePop({});
    }
     window.addEventListener("resize",handleResize);
     return(()=>{window.addEventListener("resize",handleResize)})
 
},[setStyle]);

   const basics = [[HTML,"HTML"],[CSS,"CSS"],[JS,"Javascript"]];
   const frontEnd = [[BootStrap,"BootStrap"],[ReactJs,"ReactJS"],[MUI,"MUI"]];
   const backEnd1 = [[NodeJS,"NodeJS"],[ExpressJs,"ExpressJS"],[MongoDB,"MongoDB"]];
   const backEnd2 = [[MySql,"MySQL"],[Postman,"Postman"]];
   
   const javascript = {
        name:"Javascript",
        image:JS,
        knowledge:45,
        favourites:["Functions","Asynchoronous JS"],
        experience:6
   }
   const html = {
        name:"HTML",
        image:HTML,
        knowledge:55,
        favourites:["SVG","Attributes"],
        experience:6
   }
   const css = {
        name:"CSS",
        image:CSS,
        knowledge:50,
        favourites:["Animations","3d-objects"],
        experience:6
}
const bootstrap = {
        name:"BootStrap",
        image:BootStrap,
        knowledge:50,
        favourites:["Media Queries","Buttons"],
        experience:5
}
const react = {
    name:"ReactJS",
    image:ReactJs,
    knowledge:45,
    favourites:["Life-Cycle Methods","Functional Components"],
    experience:4
}
const mui = {
    name:"Material UI",
    image:MUI,
    knowledge:45,
    favourites:["Box","Styled Components"],
    experience:4
}
const node = {
    name:"Node JS",
    image:NodeJS,
    knowledge:40,
    favourites:["Asynchoronous Programming","File System"],
    experience:4
}
const express = {
    name:"Express JS",
    image:ExpressJs,
    knowledge:40,
    favourites:["Middlewares","Express Routing"],
    experience:4
}
const mongodb = {
    name:"MongoDB",
    image:MongoDB,
    knowledge:40,
    favourites:["Aggregations","Projections"],
    experience:4
}
const mysql = {
    name:"MySQL",
    image:MySql,
    knowledge:35,
    favourites:["Joins","Aggregates"],
    experience:3
}
const postman = {
    name:"Postman",
    image:Postman,
    knowledge:35,
    favourites:["Testing","Exports"],
    experience:4
}

      const [display,setDisplay] = useState(javascript);
       const [selected,setSelected] = useState("Javascript");
       const handleDisplay = (e)=>{
       if(e.target.title === selected){
       return ;
       }
        setDisplay({});
       let toDisplay;
       if(e.target.title === "Javascript"){
       toDisplay = javascript
       }
       else if(e.target.title === "HTML"){
       toDisplay = html
       }
       else if(e.target.title === "CSS"){
       toDisplay = css
       }
       else if(e.target.title === "BootStrap"){
        toDisplay = bootstrap
       }
       else if(e.target.title === "ReactJS"){
        toDisplay = react
       }
       else if(e.target.title === "MUI"){
        toDisplay = mui
       }
       else if(e.target.title === "NodeJS"){
        toDisplay = node
       }
       else if(e.target.title === "ExpressJS"){
        toDisplay = express
       }
       else if(e.target.title === "MongoDB"){
        toDisplay = mongodb
       }
       else if(e.target.title === "MySQL"){
        toDisplay = mysql
       }
       else if(e.target.title === "Postman"){
        toDisplay = postman
       }
       setSelected(e.target.title)
       setTimeout(()=>{
       setDisplay(toDisplay);
       },100);
       }

    return(
        <div id="skills">
         <div className="showCaseAndGrid">
           <div className="showCase" title="showCase" style={stylePop} onClick={handleClose} >
             <div className="show">
            {(display.image)
               ?<>
                 {/* skill Image */}
                 <div className="showImage">
                   <img src={display.image} title={display.name} alt={display.name}></img>  
                 </div>
                 {/* Knowledge */}
                 <div className="knowOuter">
                   <h2>{"<"}Knowledge{"/>"}</h2>
                   <div className="knowInner"
                       style={{background:`linear-gradient(to right,rgb(86,86,86) ${display.knowledge}%,white ${display.knowledge+40}%)`}}>
                      
                   </div>
                 </div>
                 {/* Favourite Topics */}
                 <div className="favourites">
                    <h1>{"<"}Favourite Concepts{"/>"}</h1>
                    <p>{display.favourites[0]}</p>
                    <p>{display.favourites[1]}</p>
                 </div>
                 {/* Experience  */}
                 <div className="favourites">
                     <h2>{"<"}Hands On Experience{"/>"}</h2>
                    <p><big>{display.experience}</big> Months</p>
                 </div>
                 <div className="skillInfo">
                    <h3>NOTE</h3>
                    <h5>
                        --The above info are subject to Increase!!!</h5>
                 </div>
                 </>
                 :""}
             </div>
           </div>
           <div className="grid">
               <h1 className="skillTitle">{"<"}Skills{"/>"}</h1>
               <div className="basics">
                  {basics.map((skill,index)=>
                       <img key={index} loading="lazy" src={skill[0]} title={skill[1]} onMouseEnter={handleDisplay} onClick={handleOpen} alt="Skills"></img>)}
               </div>
               <div className="frontEnd">
                  {frontEnd.map((skill,index)=>
                       <img key={index} loading="lazy" src={skill[0]} title={skill[1]} onMouseEnter={handleDisplay} onClick={handleOpen}  alt="Skills"></img>)}
               </div>    
               <div className="backEnd1">
                  {backEnd1.map((skill,index)=>
                       <img key={index} loading="lazy" src={skill[0]} title={skill[1]} onMouseEnter={handleDisplay} onClick={handleOpen}  alt="Skills"></img>)}
               </div>
               <div className="backEnd2">
                  {backEnd2.map((skill,index)=>
                       <img key={index} loading="lazy" src={skill[0]} title={skill[1]} onMouseEnter={handleDisplay} onClick={handleOpen}  alt="Skills"></img>)}
               </div>
               <div className="space"></div>
           </div>
         </div>
        </div>
    )
}