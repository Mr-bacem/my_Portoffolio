import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json"
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
        <a href="https://x.com/GhBacem1?s=09" target="_blank" rel="noopener noreferrer" className="icon icon-twitter"></a>
        <a href="https://www.instagram.com/bacem_gdr?igsh=MTZ2bDQ4cWlkeG1yag==" target="_blank" rel="noopener noreferrer" className="icon icon-instagram"></a>
          <a href="https://github.com/Mr-bacem" target="_blank" rel="noopener noreferrer" className="icon icon-github"></a>
          <a href="https://www.linkedin.com/in/bacem-ghdiri/" target="_blank" rel="noopener noreferrer" className="icon icon-linkedin"></a>
        
        </div>
      </div>
      


      <div className="right-section animation">
      <Lottie
        lottieRef={lottieRef}
        className=""
        onLoadedImages={() => {
          // @ts-ignore
          lottieRef.current.setSpeed(0.5);
        }}
        animationData={devAnimation}
      />
    </div>
    </section>
  );
};
export default Hero;
