import { NavLink } from "react-router-dom";
import "./NavBar.css";
import NavMenubar from "./NavMenubar";
import { useState } from "react";

const Navbar = () => {

  const [active, setActive] = useState(false);
  const MenuOpener = () => {
    setActive(!active)
  };

  return (
    <>
      <nav className="bg-[#F56607] top-0 z-9999999 fixed w-full flex items-center text-[1.2vw] justify-between gap-4 p-3 py-[3vw] lg:px-[1.5vw] lg:py-[1vw]">
        <i
          onClick={MenuOpener}
          className="ri-menu-line absolute z-9999999 lg:hidden text-white text-[5.5vw] lg:text-[2vw]"
        ></i>
        <div className="initial lg:hidden"></div>
        <NavLink className="d-logo text-white hidden lg:inline" to="/">
          RecipeInMinutes
        </NavLink>
        <div className="cNav hidden lg:flex xl:flex gap-[5vw] lg:mr-[11vw]">
          <NavLink className="text-[1.5vw]" to="/">
            Home
          </NavLink>
          <NavLink className="text-[1.5vw]" to="/recipes">
            Recipes
          </NavLink>
          <NavLink className="text-[1.5vw]" to="/contact">
            Contact
          </NavLink>
          <NavLink className="text-[1.5vw]" to="/create-recipe">
            Create Recipe
          </NavLink>
          <NavLink className="text-[1.5vw]" to="/favorite">
            Favorite
          </NavLink>
        </div>
        <h2 className="m-logo initial text-white lg:hidden">RecipeInMinutes</h2>
        <div>
          <i className="ri-search-line text-[6.5vw] lg:text-[2vw] text-white"></i>
        </div>
      </nav>
      {active &&
        <NavMenubar setActive={setActive} />
      }
    </>
  );
};

export default Navbar;
