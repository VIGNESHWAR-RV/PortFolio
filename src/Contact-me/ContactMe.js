
import { useEffect, useRef, useState } from "react";
import "./contactMe.css";
// import contact from "../images/contact.svg";

 function ContactMe({style,setStyle}){

    const animate = useRef({marginTop:"100vh",opacity:"0"
                            // boxShadow:"-4vh -3.25vh 0vh 1.5vh rgb(207, 2, 2)"
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
   return(()=>{window.addEventListener("resize",handleResize)});

  },[setStyle,animate]);


  const [newPersonReachOut,setNewPersonReachOut] = useState({name:"",
                                                             email:"",
                                                             message:""
                                                             });

  const [message,setMessage] = useState("");
  
  const notifierStyle = (message === "success")
                              ? {marginTop:"0vh"}
                              : (message === "error")
                                   ? {marginTop:"0vh"}
                                   : {marginTop:"-30vh"}


  const regExp = {userName:"^[a-zA-Z0-9@#. ]{2,}$",
                  email:"^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                  message:"^[a-zA-Z0-9. ,-_]{2,}$"};
                                           
  const Inputs = 
                 [{name:"name",
                   type:"text",
                   placeholder:"Name",
                   required:true,
                   value:newPersonReachOut.name,
                   pattern:regExp.userName,
                   autoComplete:"name"},
               
                  {name:"email",
                   type:"email",
                   placeholder:"Email",
                   required:true,
                   value:newPersonReachOut.email,
                   pattern:regExp.email,
                   autoComplete:"email"}];
      
  const textInput = [{name:"message",
                      type:"textarea",
                      placeholder:`Hii...`,
                      required:true,
                      value:newPersonReachOut.message,
                      pattern:regExp.message}]

  const handleChange =(e)=>{

     setNewPersonReachOut({...newPersonReachOut,[e.target.name]:e.target.value});

  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    const {name,email,message} = newPersonReachOut;
    async function sendMail(){
    const response = await fetch(`${process.env.REACT_APP_MailServer}`,
                                 {method:"POST",
                                  headers:{"Content-Type":"application/json",key:process.env.REACT_APP_KEY},
                                  body:JSON.stringify({name,email,message})});

       if(response.status === 200){
          setMessage("success");
          if(window.innerWidth <= 900){
            setStylePop({marginTop:"-100vh"})
          }
          setNewPersonReachOut({name:"",email:"",message:""});
       }else{
          setMessage("error");
       }
       setTimeout(()=>{
           setMessage("");
       },2500)
    }
    sendMail();
  }


return(
      <div id="contactMe">
          <h1 className="fontIcon">🧍‍♂️</h1>
          <h1 className="cloudIcon">💭</h1>
          <h1 className="callIcon">📞</h1>
          {/* <img className="contactImage" src={contact} alt="contactStill"></img> */}
         <div className="showCaseAndGrid">
            <div className="showCase" title="showCase" style={stylePop} onClick={handleClose}>
               <div className="show">
                  <h3 className="formHeading">Let's Get In Touch</h3> 
                 <form className="formDiv" onSubmit={handleSubmit}>
                   {Inputs.map((input,index)=>
                      <input className="inputs" key={index} {...input} onChange={handleChange} />)}
                  {textInput.map((input,index)=>
                      <textarea className="textArea" key={index} {...input} onChange={handleChange}/>)}
                      <button className="submitButton">submit</button>
                 </form>
               </div>
            </div>
            <div className="grids">
             <div className="contactInfo"> 
                 <h1 className="quote"><q><span>Conversation with like-minded<br/> people are the best</span></q></h1>    
                    <h1 className="headingMe"><span>{"<"}</span>Friend Me<span>{"/>"}</span></h1>
                    <div className="contactLinks">
                       <button>
                       <a href={
                         `mailto:${process.env.REACT_APP_EMAIL}?
                          &subject= Let's get started with FriendShip RV!!! &body=Hello RV👋`}
                          rel="noreferrer" 
                          target="_blank" 
                          title="Personal Gmail">
                          ✍️ Gmail
                       </a>
                       </button>
                       <button>
                       <a href="https://github.com/VIGNESHWAR-RV" 
                          rel="noreferrer" 
                          target="_blank" 
                          title="Github/VIGNESHWAR-RV">
                         🤹‍♂️ Github
                       </a>
                       </button>
                    </div>
                    <h1 className="headingMe"><span>{"<"}</span>Hire Me<span>{"/>"}</span></h1>
                    <div className="contactLinks">
                        <button>
                        <a href="https://drive.google.com/file/d/1d19hBToZ-A3Q_kp9fTQ5neFUJNt0L5qa/view?usp=sharing" rel="noreferrer" target="_blank" title="Resume">
                        📜 Resume 
                        </a>
                        </button>
                        <button>
                    <a href="https://www.linkedin.com/in/vigneshwar-rv/" rel="noreferrer" target="_blank" title="LinkedIn">
                    🧘‍♂️ LinkedIn 
                    </a>
                        </button>
                    </div>
                    {(window.innerWidth <= 900)
                       ?
                        <>
                        <h1 className="headingMe"><span>{"<"}</span>For more Enquiries<span>{"/>"}</span></h1>
                        <div className="contactLinks">
                            <button onClick={handleOpen}>
                                Message Me
                            </button>
                        </div>
                        </>
                       :""}
              </div>
 
              <div style={notifierStyle} className="messagePopper">
                  <h3>{(message==="success")
                          ?"Message Sent 🥳"
                          :(message==="error")
                             ?"Mail not sent 🤯"
                             :""}</h3>
              </div>
            </div>
         </div>
      </div>
)

}


export default ContactMe;