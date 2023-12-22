import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <nav className="bg-black sticky h-[80px] mx-auto w-full flex items-center">
            <div className="w-[1400px] mx-auto flex justify-between">
                <div>
                    <NavLink to="/"><h1 className="text-white font-bold">To Do App</h1></NavLink>
                </div>
                <div className="flex gap-10">
                    <NavLink to="/"><h1 className="text-white font-bold"><FaLinkedin className="text-2xl" /></h1></NavLink>
                    <NavLink to="/"><h1 className="text-white font-bold"><FaGithub className="text-2xl" /></h1></NavLink>
                </div>
            </div>
        </nav>
    )
}


export default Footer;
