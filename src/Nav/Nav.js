
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export function Nav({setStyle,pages,setPages}){

    const navigate = useNavigate();

    const nav = useRef();
    const navigation = (e)=>{

        if(e.target.value === pages[pages.length -1]){
             return;
        }
        else{
        let currentPage = pages;
        // console.log(currentPage,e.target.value);
        const index = pages.indexOf(e.target.value);
        const sliced = currentPage.slice(0,index+1);
        for(let j=0;j<=index;j++){
          currentPage.shift();
        }
        currentPage = [...currentPage,...sliced];
        
        setPages(currentPage);
        setStyle({marginTop:"0vh",opacity:"1"});
        
        setTimeout(()=>{
            navigate(currentPage[currentPage.length - 1]);
            
        },820);
        return;
     }
    };

    // const handleFocus = (e)=>{
    //     e.target.style.background ="white";
    //     e.target.style["-webkit-background-clip"] = "text";
    //     e.target.style["background-clip"] = "text";
    // }   

    // const handleBlur = (e) =>{
    //     e.target.style.background ="red";
    //     e.target.style["-webkit-background-clip"] = "text";
    //     e.target.style["background-clip"] = "text";
    // }
    //  console.log("rendering");
    
    useEffect(()=>{
         nav.current.childNodes.forEach(child => {
             if(child.value === pages[pages.length -1]){
                 child.style.color = "white";
                 child.style.transform = "scale(1.2)";
             }else{
                 child.style.color = "transparent";
                 child.style.transform = "scale(1)"
             }
        });
    },[pages]);


    return(
        <>
        <div className="navBar">
            {/* <button><a href="#home">Home</a></button> */}
            <div ref={nav} className="navButtons">
               <button onClick={navigation} value="/Projects" title="Projects" >🎪</button>
               <button onClick={navigation} value="/Contact-me" title="Contact-me">👨‍💻</button>
               <button onClick={navigation} value="/" title="Home" autoFocus>🏠</button>
               <button onClick={navigation} value="/Education" title="Education">🎖️</button>
               <button onClick={navigation} value="/Skills" title="Skills">🧗‍♂️</button>
            </div>
        <div className="innerNav"></div>
        </div>
        </>
    )
}