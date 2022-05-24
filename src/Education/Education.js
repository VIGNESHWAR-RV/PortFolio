import { useEffect, useRef, useState } from "react";
import "./education.css";
import Velammal from "../images/Educational-Images/VELAMMAL.webp";
import Irtt from "../images/Educational-Images/IRTT.webp";
// import Guvi from "../images/Educational-Images/GUVI.webp";

 function Education({style,setStyle}){

    const animate = useRef({marginTop:"100vh",opacity:"0"
                          });
    
    const defaultTimeline = useRef();

  // useEffect(()=>{
  //    defaultTimeline.current.scrollTo({
  //      top:466,
  //      behavior:"smooth"
  //    })
  // },[]);
   
  useEffect(()=>{
    const handleTimeout=()=>{
      setTimeout(()=>{
          setStyle(animate.current);
      },100);
  }

  window.onload = handleTimeout();
  },[setStyle,animate]);

    const [display,setDisplay] = useState({icon:"🙋",
                                           interest:["Botany","Physics"],
                                           hobby:["VolleyBall🏐","Chess♟️"]
                                          });
    const [selected,setSelected] = useState("course");
    const handleDisplay = (e)=>{
      if(e.target.title === selected){
        return ;
      }
      setDisplay({});
      let toDisplay;
      if(e.target.title === "school"){
          toDisplay = {icon:"🙋",
                     interest:["Botany","Physics"],
                     hobby:["VolleyBall🏐","Chess♟️"]
                    }
      }
      else if(e.target.title === "college"){
            toDisplay = {icon:"👨‍🎓",
                       interest:["Tech-Gadgets","Android🤖"],
                       hobby:["Custom Roms On Android","Trucking"]
                      }
      }
      else if(e.target.title === "course"){
            toDisplay = {icon : "👨‍💻",
                       interest:["Web Development","AI"],
                       hobby:["Coding","Singing🎶"]
                      }
      }
      setSelected(e.target.title)
      setTimeout(()=>{
        setDisplay(toDisplay);
      },100);
    }

    return(
        <div id="education">
           <div className="infoAndDisplay">
               <div className="display">
                
                   <div className="box">
                   {(display.icon)
                   ? <>
                       <h1 className="icon">{display.icon}</h1>
                       <div className="interest">
                           <h2>{"<"}Interests{"/>"}</h2>
                           <p>{display.interest[0]}</p>
                           <p>{display.interest[1]}</p>
                       </div>
                       <div className="hobby">
                           <h2>{"<"}Hobbies{"/>"}</h2>
                           <p>{display.hobby[0]}</p>
                           <p>{display.hobby[1]}</p>
                       </div>
                     </>
                      :""}
                   </div>
                  
               </div>
               
               <div className="info">
                   <div className="lineDiv">
                      <h1 className="timeline">{"<"}Timeline{"/>"}</h1>
                      <hr/>
                   </div>
                 
                 <div className="Events" ref={defaultTimeline}>
                 <div className="Event" title="school" onMouseEnter={handleDisplay}>
                      <div className="year" title="school">
                        <h1 title="school">2015-2017</h1>
                        <p title="school">pursued <span title="school">Bio-Maths</span> group {"&"} completed with <span title="school">92%</span></p>
                      </div>
                      <h2 title="school">🎒</h2>
                      <img src={Velammal} loading="eager" title="school" alt="Velammal Matric school,Karur"></img>
                 </div>
                 <div className="Event" title="college" onMouseEnter={handleDisplay}>
                     <div className="year" title="college">
                       <h1 title="college">2017-2021</h1>
                       <p title="college">pursued <span title="college">B.E Civil Engg</span> {"&"} completed with <span title="college">7.2 CGPA</span></p>
                      </div>
                     <h2 title="college">👨‍🎓</h2>
                     <img src={Irtt} loading="eager" title="college" alt="IRTT College"></img>
                 </div>
                 {/* <div className="Event" title="course" onMouseEnter={handleDisplay}>
                     <div className="year" title="course">
                       <h1 title="course">2021-present</h1>
                       <p title="course">pursued <span title="course">MERN DEVELOPMENT</span> due to my <span title="course">LOVE </span>
                          towards <span title="course">TECH</span> {"&"} successfully completed the course</p>
                     </div>
                     <h2 title="course">👨‍💻</h2>
                     <img className="guvi" loading="eager" title="course" src={Guvi} alt="GUVI MERN STACK PROGRAMME"></img>
                 </div> */}
                 <div className="Event">
                     <div className="year">
                       <h1>Future</h1>
                       {/* <p>pursued <span>MERN DEVELOPMENT</span> due to my <span>LOVE </span>
                          towards <span>TECH</span> {"&"} successfully completed the course</p> */}
                     </div>
                     <h2>🦸‍♂️</h2>
                     <h1 className="future">Coder🎯</h1>
                 </div>
                 
                </div>
               </div>
           </div>
        </div>
    )
}

export default Education;