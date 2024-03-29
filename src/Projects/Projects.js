import { useEffect, useRef, useState } from "react";
import "./projects.css";
import CRM from "../images/projectImages/CRM.webp";
import MovieList from "../images/projectImages/MovieList.webp";
import Calc from "../images/projectImages/Calc.webp";
import EBookCart from "../images/projectImages/EBookKart.webp";
import Admin from "../images/projectImages/Admin.webp";
import Security from "../images/projectImages/Security.webp";
import Todo from "../images/projectImages/Todo.webp";
import Markdown from "../images/projectImages/MarkDown.webp";

function Projects({ setStyle }) {

  const animate = useRef({
    marginTop: "100vh", opacity: "0"
    //  boxShadow:"-4vh -3.25vh 0vh 1.5vh rgb(207, 2, 2)"
  });

  const [stylePop, setStylePop] = useState({});

  const handleResize = () => {
    if (window.innerWidth <= 900) {
      setStylePop({ marginTop: "100vh" });
    }
    else {
      setStylePop({});
    }
  }
  const handleOpen = () => {
    if (window.innerWidth <= 900) {
      return setStylePop({ marginTop: "0vh" })
    }
  }
  const handleClose = (e) => {
    if (e.target.title === "showCase") {
      if (window.innerWidth <= 900) {
        return setStylePop({ marginTop: "100vh" })
      }
    }
  }


  useEffect(() => {

    const handleTimeOut =()=>{
       setTimeout(() => {
        setStyle(animate.current);
       }, 100);
    }
    
    window.onloadeddata = handleTimeOut();

    if (window.innerWidth <= 900) {
      setStylePop({ marginTop: "100vh" });
    } else {
      setStylePop({});
    }

    window.addEventListener("resize", handleResize);
    return (() => { window.addEventListener("resize", handleResize) });

  }, [setStyle, animate])


  const onGoing = [[CRM, "CRM"], [EBookCart, "EBookCart"]];
  const completed1 = [[Markdown, "MarkDown Viewer"], [MovieList, "MovieReview And Tic-Tac-Toe Game"]];
  const completed2 = [[Admin, "Admin"], [Security, "Security"] , [Todo, "Todo-List"], [Calc, "Calculator"]]


  const crm = {
    head: "CRM APP",
    underDev: true,
    skillsUsed: ["React", "MUI", "NodeJS", "ExpressJS", "MongoDB", "Postman"],
    concepts: ["Authentication", "JWT", "Authorization", "Hooks🪝", "RestAPI-CRUD"],
    site: "https://crm-rv.netlify.app/",
    src: ["https://github.com/VIGNESHWAR-RV/crm-frontend", "https://github.com/VIGNESHWAR-RV/crm-backend"]
  }
  const BookCart = {
    head: "RV's EBook Cart",
    underDev: true,
    skillsUsed: ["React", "MUI", "NodeJS", "ExpressJS", "MongoDB", "Postman"],
    concepts: ["Authentication", "JWT", "Authorization", "Hooks🪝", "RestAPI-CRUD"],
    site: "https://book-ecart-rv.netlify.app/",
    src: ["https://github.com/VIGNESHWAR-RV/books-ecart-front", "https://github.com/VIGNESHWAR-RV/books-eCart"]
  }
  const markdown = {
    head: "MarkDown Viewer with Storage",
    skillsUsed: ["React", "NodeJS", "ExpressJS", "MongoDB", "Postman"],
    concepts: ["Authentication", "JWT", "Authorization", "Hooks🪝", "MarkDown", "RestAPI-CRUD"],
    site: "https://markdown-previewer-with-storage.netlify.app/",
    src: ["https://github.com/VIGNESHWAR-RV/markdown-viewer-frontEnd", "https://github.com/VIGNESHWAR-RV/markdown_viewer_backend"]
  }
  const movielist = {
    head: "Movie Review & Tic-Tac-Toe",
    skillsUsed: ["React", "MUI", "NodeJS", "MongoDB" , "JWT" ],
    concepts: ["RestAPI-CRUD","Google-Auth", "Hooks🪝", "Formik(validations)"],
    site: "https://movie-review-rv.netlify.app/",
    src: ["https://github.com/VIGNESHWAR-RV/my-movielist-with-many-routes", "https://github.com/VIGNESHWAR-RV/nodeJs"]
  }
  const security = {
    head: "Authentication Flow",
    skillsUsed: ["React", "NodeJS", "ExpressJS", "MongoDB", "Postman"],
    concepts: ["Authentication", "JWT", "Authorization", "Hooks🪝", "RestAPI-CRUD"],
    site: "https://authentication-work-by-rv.netlify.app/",
    src: ["https://github.com/VIGNESHWAR-RV/password-reset-ui", "https://github.com/VIGNESHWAR-RV/password-reset"]
  }
  const admin = {
    head: "React Admin Panel",
    skillsUsed: ["React", "MUI"],
    concepts: ["Recharts(chart)", "Hooks🪝", "RestAPI-CRUD"],
    site: "https://sb-admin-2-using-context-by-rv.netlify.app/",
    src: "https://github.com/VIGNESHWAR-RV/sb-admin-2-with-context-api"
  }
  const todo = {
    head: "Todo-List",
    skillsUsed: ["React", "CSS"],
    concepts: ["Hooks🪝", "Components", "Conditional Rendering"],
    site: "https://todo-list-react-rv.netlify.app/",
    src: "https://github.com/VIGNESHWAR-RV/my-todolist"
  }
  const calc = {
    head: "Calculator",
    skillsUsed: ["HTML", "CSS", "Vanilla JS"],
    concepts: ["DOM-Manipulation", "Event Handling"],
    site: "https://calculator-by-rv.netlify.app/",
    src: "https://github.com/VIGNESHWAR-RV/CALCULATOR"
  }

  function Concepts({ index, skill }) {
    if (index % 2 === 1) {
      return (<><span key={index}>{skill}</span><br /><br /></>)
    }
    else {
      return (<span key={index}>{skill}</span>)
    }
  }

  const [display, setDisplay] = useState(crm);
  const [selected, setSelected] = useState("CRM");

  const handleDisplay = (e) => {
    if (e.target.title === selected) {
      return;
    }
    setDisplay({});
    let toDisplay;
    if (e.target.title === "CRM") {
      toDisplay = crm
    }
    else if (e.target.title === "EBookCart") {
      toDisplay = BookCart
    }
    else if (e.target.title === "MarkDown Viewer") {
      toDisplay = markdown
    }
    else if (e.target.title === "Admin") {
      toDisplay = admin
    }
    else if (e.target.title === "MovieReview And Tic-Tac-Toe Game") {
      toDisplay = movielist
    }
    else if (e.target.title === "Todo-List") {
      toDisplay = todo
    }
    else if (e.target.title === "Calculator") {
      toDisplay = calc
    }
    else if (e.target.title === "Security") {
      toDisplay = security
    }
    setSelected(e.target.title)
    setTimeout(() => {
      setDisplay(toDisplay);
    }, 100);
  }


  return (
    <div id="projects">
      <div className="showCaseAndGrid">
        <div className="showCase" title="showCase" style={stylePop} onClick={handleClose}>
          <div className="show" >
            <div className="projectInfo">
              {(display.head !== undefined)
                ?
                <>
                  <h1>{"< "}{display.head}{" />"}</h1>
                  {(display.underDev)
                    ? <h3>----🏗️Under Development🚧----</h3>
                    : ""}
                  <div className="skillsUsed">
                    <h1>{"<"}Skills Used{"/>"}</h1>
                    {display.skillsUsed.map((skill, index) => <Concepts key={index} index={index} skill={skill} />)}
                  </div>
                  <div className="concepts">
                    <h1>{"<"}Concepts Involved{"/>"}</h1>
                    {display.concepts.map((skill, index) => <Concepts key={index} index={index} skill={skill} />)}
                  </div>
                  <div className="projectLinks">
                    <button>
                      <a href={display.site} rel="noreferrer" target="_blank">Demo</a>
                    </button>
                    <button>
                      <a href={(display.src.length === 2) ? display.src[0] : display.src} rel="noreferrer" target="_blank">
                        {(display.src.length === 2)
                          ? "FE🎨"
                          : "Source🗃️"}
                      </a>
                    </button>
                    {(display.src.length === 2)
                      ? <button>
                        <a href={display.src[1]} rel="noreferrer" target="_blank">BE🛠️</a>
                      </button>
                      : ""}

                  </div>
                </>
                : ""}
            </div>
          </div>
        </div>
        <div className="grid">
          <h1 className="skillTitle">{"<"}Projects{"/>"}</h1>
          <h1 className="fullStack">{"< "}Full Stack Apps{" />"}</h1>
          <div className="onGoing">
            {(onGoing.map((project, index) =>
              <img className="project"
                key={index}
                src={project[0]}
                alt={project[1]}
                title={project[1]}
                onClick={(e)=>{handleOpen();handleDisplay(e)}}
                // onMouseEnter={handledisplay}
                loading="eager">
              </img>))}
          </div>
          <div className="completed1">
            {(completed1.map((project, index) =>
              <img className="project"
                key={index}
                src={project[0]}
                alt={project[1]}
                title={project[1]}
                onClick={(e)=>{handleOpen();handleDisplay(e)}}
                  // onMouseEnter={handledisplay}
                loading="eager">
              </img>))}
          </div>
          <h1 className="fullStack">{"< "}FrontEnd Practises{" />"}</h1>
          <div className="completed2">
            {(completed2.map((project, index) =>
              <img className="project"
                key={index}
                src={project[0]}
                alt={project[1]}
                title={project[1]}
                onClick={(e)=>{handleOpen();handleDisplay(e)}}
                // onMouseEnter={handleDisplay}
                loading="eager">
              </img>))}
          </div>
          <div className="space"></div>
        </div>
      </div>
    </div>
  )
}

export default Projects;