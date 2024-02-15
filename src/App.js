import {useState, useEffect, createContext, useRef} from "react";
import { Board } from "./components/board";
import { Home } from "./Pages/Home";

export const PointerContext = createContext();

const App = () => {

    const staticPointerRef = useRef();

  return (
  <PointerContext.Provider value={{staticPointerRef}}>
    <Board ref={staticPointerRef}>
      <Home />
    </Board>
  </PointerContext.Provider>
  );
};

export default App;