
import { useEffect, useRef, useState } from "react";
import "./home.css";
import RV from "../images/RV.svg";
import { useNavigate } from "react-router-dom";

export function Home({setStyle,setPages}){

   const navigate = useNavigate();

    const animate = useRef({marginTop:"100vh"
                          });
    
  useEffect(()=>{
    setTimeout(()=>{
       setStyle(animate.current);
   },100);
},[setStyle,animate]);

   const [roleArray,setRoleArray] = useState(["MERN Stack Developer👀","Questioner❔ why❔ why not❔","Code Experimentor🧪","Dreamer💤"]);

   useEffect(()=>{
    const timer =  setTimeout(() => {
                      const currentArray = [...roleArray];
                      const firstElement = currentArray.shift();
                      currentArray.push(firstElement);
                      setRoleArray(currentArray);
                   },3500);

    return(()=>clearTimeout(timer));
   
   },[roleArray]);

   const handleClick=()=>{
       const pages = ["/","/Education","/Skills","/Projects","/Contact-me"]
      setPages(pages);
      setStyle({marginTop:"0vh"});
      return setTimeout(()=>{
        navigate(pages[pages.length - 1]);
    },620);
   }
    
    return(
        <div  id="home">
                <div className="titleAndImage">
                    <div className="image">
                        {/* <RVLogo className="myImage"/> */}
                       <img className="myImage" loading="eager" src={RV} alt="RV"></img>
                    </div>
                    <div className="title">
                       <h1>Hiii👋,</h1>
                       <h1>I'm<span>{" < "}</span>
                               <span className="name">V</span>
                               <span className="name">i</span>
                               <span className="name">g</span>
                               <span className="name">n</span>
                               <span className="name">e</span>
                               <span className="name">s</span>
                               <span className="name">h</span>
                               <span className="name">w</span>
                               <span className="name">a</span>
                               <span className="name">r</span>
                               <span className="name"> RV</span>
                               <span>{" />"}</span>
                       </h1>
                        <p className="role">{roleArray[0]}</p>
                        
                        <div className="About">
                        <h3>Hmm..Hmm..</h3>
                        <h2><span>{"<"}</span>About Me<span>{"/>"}</span></h2>
                        <p>I am an engineer who started to learn code for fun.
                           The <span>{"<Fun_Thing/>"} </span> that I found in coding is <span>SOLVING PROBLEMS</span>.
                           Yeah you read it right!.. It was <span>amazing</span> for me to see the different logical approaches professionals make to
                           solve a problem.. As of now, {"{"}<span> {"this.amazed😅"}</span>{"}"} led me here , and sure will lead me 
                           to more challenging places out there.
                        </p>
                        
                        <div>
                           <button onClick={handleClick} title="contact">
                                  Contact Me🤵
                           </button>
                        </div>
                        </div>
                        {/* <p className="navInfo">
                            {"<-------------Feel Free to use Nav bar and 🏹 keys"}
                        </p> */}
                    </div>
                </div>
            </div>
    )
}