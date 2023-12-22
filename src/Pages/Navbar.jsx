import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-black h-[80px] sticky top-0 z-20 mx-auto w-full flex items-center">
            <div className="w-[1400px] mx-auto flex justify-between">
                <div>
                    <NavLink to="/"><h1 className="text-white font-bold">To Do App</h1></NavLink>
                </div>
                <div className="flex gap-10">
                    <NavLink to="/"><h1 className="text-white font-bold">Home</h1></NavLink>
                    <NavLink to="/"><h1 className="text-white font-bold">Dashboard</h1></NavLink>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
