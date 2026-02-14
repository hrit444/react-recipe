import { NavLink } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero bg-[#FBF6EC] h-screen w-screen overflow-hidden">
      <div className="text">
        <h1>
          Healthy <span>Eating is </span> <br className="inline lg:hidden" />{" "}
          <br className="hidden lg:inline" />
          <span>an</span> <span className="oText">Important</span> part <br />{" "}
          of Lifestyle
        </h1>
        <img className="mImg" src="https://images.pexels.com/photos/28371798/pexels-photo-28371798.jpeg" alt="" />
        <p>We prepare delicious food recipes for you. <br className="hidden lg:inline"/> We are always here!</p>
        <div className="btn flex justify-center align-center lg:justify-start gap-[4vw] lg:gap-[3vw] ">
          <NavLink
            className="bg-red-600 h-[8vw] lg:h-[3vw] text-white flex justify-center items-center px-[3vw] py-[.8vw] rounded-[2vw]"
            to="/recipes"
          >
            <h6>Explore Now</h6>
          </NavLink>
          <NavLink
            className="bg-[#F56607] h-[8vw] lg:h-[3vw] text-white flex justify-center items-center px-[3vw] py-[.8vw] rounded-[2vw]"
            to="/create-recipe"
          >
            <h6>Create yours</h6>
          </NavLink>
        </div>
      </div>
      <img className=".dImg hidden xl:block h-[40vw] w-[30vw] bg-center object-cover rounded-[2vw]" src="https://images.pexels.com/photos/28371797/pexels-photo-28371797.jpeg" alt="" />
    </div>
  );
};

export default Hero;
