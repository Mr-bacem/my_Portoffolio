import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../../public/animation/dev.json"
import { useRef } from "react";
const Hero = () => {

  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <img src="./mypic.jpg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          {" "}
          Student at GoMyCode Platform as FullStuck Js developper
        </h1>

        <p className="sub-title">
          I'm Bacem Ghdiri , a FullStuck Js student at GoMyCode Platform. I
          learn Html ,Css ,Javascript and React
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      


      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};
export default Hero;
