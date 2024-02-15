import {useContext} from "react";
import { PointerContext } from "../../App";
import {highLight_wrapper} from "./highlighter.module.css";

const HighLighter = ({children, customClass=""}) => {

  const {staticPointerRef} = useContext(PointerContext);

  const updateMousePointerSize = (e) =>{
    if (staticPointerRef.current) {
        let elementSize = e.currentTarget.getBoundingClientRect();
        staticPointerRef.current.style.height = `${elementSize.height}px`;
        staticPointerRef.current.style.width = `${elementSize.height}px`;
        staticPointerRef.current.noHoverTailAnimation = true;
    }
  };

  const removeMousePointerStyles = (e) => {
    if (staticPointerRef.current) {
        staticPointerRef.current.style.height = null;
        staticPointerRef.current.style.width = null;
        staticPointerRef.current.noHoverTailAnimation = null;
    }
  }

  return (
    <div className={highLight_wrapper + " " + customClass}
      onMouseEnter={updateMousePointerSize} 
      onMouseLeave={removeMousePointerStyles}>
      {children}
    </div>
  )
};

export default HighLighter;