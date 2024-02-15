import { forwardRef, useEffect, useState, useRef, useLayoutEffect } from "react";
import { HighLighter } from "../../components/highlighter";
import {blackboard_wrapper, dot, static_pointer, content_wrapper, canvas} from "./board.module.css";

const Board = forwardRef(({children}, staticPointerRef) => {
    const wrapperRef = useRef();
    const canvasRef = useRef();
    
    const handleMouseFollow = (e) => {
      // let size = staticPointerRef.current.getBoundingClientRect();
      // const translateString = `translate(${e.clientX - staticPointerRef.current.offsetWidth}px, ${e.clientY - staticPointerRef.current.offsetHeight}px)`;
      // console.log(translateString);
      // staticPointerRef.current.style.transform = translateString;

      staticPointerRef.current.style.left = `${e.clientX}px`;
      staticPointerRef.current.style.top = `${e.clientY}px`;


      // if (!staticPointerRef.current.noHoverTailAnimation) { // && !isDotRendered.current
      //   const dotElement = staticPointerRef.current.cloneNode();
      //   dotElement.className = dot;
      //   // dotElement.style.left = `${e.clientX}px`;
      //   // dotElement.style.top = `${e.clientY}px`;
      //   // dotElement.style.width = `${staticPointerRef.current.customSize}px`;
      //   // dotElement.style.height = `${staticPointerRef.current.customSize}px`;
      //   dotElement.addEventListener("animationend", (event) => {
      //     event.target.remove();
      //   }, {once: true});
      //   wrapperRef.current.appendChild(dotElement);
      // }

      // isDotRendered.current = !isDotRendered.current;
        
    }

    // useLayoutEffect(()=>{

      // const ctx = canvasRef.current.getContext("2d");
      // ctx.fillStyle = "red";
      // ctx.fillRect(20, 20, 200, 100);
      // ctx.clearRect(20, 20, 200, 100);
      // ctx.clearRect(20, 20, 200, 100);

      // ctx.strokeStyle = "yellow";
      // ctx.lineWidth = 1;
      // ctx.strokeRect(20, 20, 200, 100);
      // ctx.clearRect(15, 15, 210, 110);

      // ctx.beginPath();
      // ctx.moveTo(0, 0);
      // ctx.lineTo(150, 112);
      // ctx.lineTo(300, 150);
      // ctx.stroke();
      // ctx.fill();      

      // const myCanvas = canvasRef.current;
      // const originalHeight = myCanvas.height;
      // const originalWidth = myCanvas.width;
      // render();
      // function render() {
      //   let dimensions = getObjectFitSize(
      //     true,
      //     myCanvas.clientWidth,
      //     myCanvas.clientHeight,
      //     myCanvas.width,
      //     myCanvas.height
      //   );
      //   console.log(myCanvas.clientWidth, myCanvas.width, myCanvas.clientHeight, myCanvas.height);
      //   const dpr = window.devicePixelRatio || 1;
      //   myCanvas.width = dimensions.width * dpr;
      //   myCanvas.height = dimensions.height * dpr;
      
      //   let ctx = myCanvas.getContext("2d");
      //   let ratio = Math.min(
      //     myCanvas.clientWidth / originalWidth,
      //     myCanvas.clientHeight / originalHeight
      //   );
      //   ctx.scale(ratio * dpr, ratio * dpr); //adjust this!
      //   ctx.beginPath();
      //   ctx.moveTo(0, 0);
      //   ctx.lineTo(4000, 2000);
      //   // ctx.arc(200, 200, 200, 0, 2 * Math.PI);
      //   ctx.strokeStyle = "red";
      //   ctx.stroke();
      // }
      
      // // adapted from: https://www.npmjs.com/package/intrinsic-scale
      // function getObjectFitSize(
      //   contains /* true = contain, false = cover */,
      //   containerWidth,
      //   containerHeight,
      //   width,
      //   height
      // ) {
      //   var doRatio = width / height;
      //   var cRatio = containerWidth / containerHeight;
      //   var targetWidth = 0;
      //   var targetHeight = 0;
      //   var test = contains ? doRatio > cRatio : doRatio < cRatio;
      
      //   if (test) {
      //     targetWidth = containerWidth;
      //     targetHeight = targetWidth / doRatio;
      //   } else {
      //     targetHeight = containerHeight;
      //     targetWidth = targetHeight * doRatio;
      //   }
      
      //   return {
      //     width: targetWidth,
      //     height: targetHeight,
      //     x: (containerWidth - targetWidth) / 2,
      //     y: (containerHeight - targetHeight) / 2
      //   };
      // }

    // }, []);


    return (
      <>
        <div ref={wrapperRef} className={blackboard_wrapper} onMouseMove={handleMouseFollow} >
          <div ref={staticPointerRef} className={static_pointer}></div>
          <div className={content_wrapper}>
            <canvas ref={canvasRef} className={canvas} width="300" height="150"></canvas>
            {children}
          </div>
        </div>
      </>
    );
});

export default Board;