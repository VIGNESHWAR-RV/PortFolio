import { HighLighter } from "../../components/highlighter";
import { home_wrapper, lang_wrapper, lang_text_style } from "./home.module.css";



export const Home = () => {

  // const name = ["J","A","V","A","S","C","R","I","P","T"];
  const name = "JAVASCRIPT";

  return (
    <div className={home_wrapper}>
      
      <HighLighter>
        <h1 className="">Vigneshwar Venkatachalam</h1>
      </HighLighter>
      <HighLighter customClass={lang_wrapper}>
        <h1 className={lang_text_style}>{name}</h1>
      </HighLighter>
      
    </div>
  )
};

export default Home;