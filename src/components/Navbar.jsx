import { NavLink } from "react-router-dom"
import LHSLogo from "../assets/images/LHSLogo.png";

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg items-center justify-center flex font-bold shadow-md">
            <img
                src={LHSLogo}
                alt="LHS Logo"
                className="w-full h-full object-contain"
            />
        </NavLink>
        <nav className ="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className ={({ isActive }) => isActive ? 'text-black-500' : 'text-white'}>
                About
            </NavLink>
            <NavLink to="/projects" className ={({ isActive }) => isActive ? 'text-black-500' : 'text-white'}>
                Projects
            </NavLink>
        </nav>
    </header>    
  )
}

export default Navbar
