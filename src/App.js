import { useState,useEffect,lazy,Suspense } from 'react';
import {Routes,Route, useNavigate} from "react-router-dom";
import './App.css';
import { Nav } from './Nav/Nav';

const LazyHome = lazy(()=> import("./Home/home"));
const LazyEducation = lazy(()=> import("./Education/Education"));
const LazySkills = lazy(()=>import("./Skills/Skills"));
const LazyContactMe = lazy(()=>import("./Contact-me/ContactMe"));
const LazyProjects = lazy(()=>import("./Projects/Projects"));

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
        <Route path="/" element={ <Suspense fallback="Loading...">
                                      <LazyHome style={style} setStyle={setStyle} setPages={setPages}/>
                                  </Suspense> }/>

        <Route path="/Education" element={<Suspense fallback="Loading...">
                                              <LazyEducation style={style} setStyle={setStyle}/>
                                          </Suspense>} />
        <Route path="/Skills" element={<Suspense fallback="Loading...">
                                              <LazySkills style={style} setStyle={setStyle}/>
                                       </Suspense>} />
        <Route path="/Projects" element={<Suspense fallback="Loading...">
                                              <LazyProjects style={style} setStyle={setStyle}/>
                                         </Suspense>} />
        <Route path="/Contact-me" element={<Suspense fallback="Loading...">
                                              <LazyContactMe style={style} setStyle={setStyle}/>
                                           </Suspense>} />
      </Routes>
     
     
    </div>
  );
}

export default App;
