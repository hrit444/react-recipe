import { NavLink } from "react-router-dom"
import "./NavMenubar.css";

const NavMenubar = () => {
  
  const closeHandler = (setActive)=>{
    setActive(false)
    
  }

  return (
    <div className="bg-[#7b7b7b48] w-[100vw] h-[100vh] fixed top-0 left-[0] z-999999">
      <div className="nav-menu bg-[#F56607] h-[45%] flex flex-col px-[4vw] pb-[8vw]">
        <NavLink onClick={closeHandler} className="nText mt-[10vw]" to="/">Home</NavLink>
        <NavLink onClick={closeHandler} className="nText" to="/recipes">Recipes</NavLink>
        <NavLink onClick={closeHandler} className="nText" to="/contact">Contact</NavLink>
        <NavLink onClick={closeHandler} className="nText" to="/create-recipe">Create Recipe</NavLink>
        <NavLink onClick={closeHandler} className="nText" to="/favorite">Favorite</NavLink>
      </div>
    </div>
  )
}

export default NavMenubar