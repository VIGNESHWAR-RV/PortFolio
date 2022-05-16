import { useState,useEffect } from 'react';
import {Routes,Route, useNavigate} from "react-router-dom";
import './App.css';
import { Nav } from './Nav/Nav';

import Home from './Home/home';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import ContactMe from './Contact-me/ContactMe';
import Projects from './Projects/Projects';


// const LazyHome = lazy(()=> import("./Home/home"));
// const LazyEducation = lazy(()=> import("./Education/Education"));
// const LazySkills = lazy(()=>import("./Skills/Skills"));
// const LazyContactMe = lazy(()=>import("./Contact-me/ContactMe"));
// const LazyProjects = lazy(()=>import("./Projects/Projects"));

function App() {

  const [style,setStyle] = useState({marginTop:"0vh",opacity:"1"});

  const [pages,setPages] = useState(["/Education","/Skills","/Projects","/Contact-me","/"]);

  const navigate = useNavigate();

  const handleNavigate =(e) =>{

    if(e.key !== "ArrowDown" && 
       e.key !== "ArrowRight" &&
       e.key !== "ArrowLeft" &&
       e.key !== "ArrowUp"){
         return;
       }
   
    else if(e.key === "ArrowDown" || e.key === "ArrowRight"){
      const currentPage = [...pages];
      currentPage.push(currentPage.shift());
      //console.log(currentPage);
       setPages(currentPage);
       setStyle({marginTop:"0vh",opacity:"1"});
 
     return setTimeout(()=>{
            navigate(currentPage[currentPage.length - 1]);
        },820); 
    }
    else if(e.key === "ArrowUp" || e.key === "ArrowLeft"){
      const currentPage = [...pages];
      currentPage.unshift(currentPage.pop());
      //console.log(currentPage);
      setPages(currentPage);
      setStyle({marginTop:"0vh",opacity:"1"});
 
     return setTimeout(()=>{
            navigate(currentPage[currentPage.length - 1]);
        },820); 
    }

  }

  useEffect(()=>{
    navigate(pages[pages.length - 1])
    //  window.addEventListener(onkeyup,handleNavigate);
    // return(()=>
    //  window.removeEventListener(onkeyup,handleNavigate));


    //eslint-disable-next-line
  },[]);



  // const handleScroll = (e)=>{
    
  //   const currentPage = [...pages];
  //     currentPage.push(currentPage.shift());
  //     //console.log(currentPage);
  //      setPages(currentPage);
  //      setStyle({marginTop:"100vh",transform:"translateX(50vw)"});
 
  //    return setTimeout(()=>{
  //           setStyle({marginTop:"100vh",transform:"translateX(-50vw)"})
  //           navigate(currentPage[currentPage.length - 1]);
  //       },400); 
  // }
  

  return (
    <div className="App" onKeyUp={handleNavigate} >
        <div style={style} className='logo'>
          <h1  className='logo_style'><span>R</span>V</h1>
        </div>
        <Nav setStyle={setStyle} pages={pages} setPages={setPages}/>
      <Routes>
        <Route path="/" element={ <Home style={style} setStyle={setStyle} setPages={setPages}/> }/>
        <Route path="/Education" element={<Education style={style} setStyle={setStyle}/> }/>
        <Route path="/Skills" element={<Skills style={style} setStyle={setStyle}/> }/>
        <Route path="/Projects" element={ <Projects style={style} setStyle={setStyle}/> }/>
        <Route path="/Contact-me" element={<ContactMe style={style} setStyle={setStyle}/> }/>
      </Routes>
     
     
    </div>
  );
}

export default App;
