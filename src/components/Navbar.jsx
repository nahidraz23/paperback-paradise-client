import { Link, NavLink } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {

    const links = <div className="flex flex-col lg:flex-row gap-2 items-center">
        <li className="font-work-sans text-lg">
            <NavLink to={'/'} style={({ isActive }) => {
                return isActive ? { backgroundColor: "white", color: "#9333ea", fontWeight: "600" } : {};
            }}>Home
            </NavLink>
        </li>
        <li className="font-work-sans text-lg">
            <NavLink to={'/listed-books'} style={({ isActive }) => {
                return isActive ? { backgroundColor: "white", color: "#9333ea", fontWeight: "600" } : {};
            }}>
                Listed Books
            </NavLink>
        </li>
        <li className="font-work-sans text-lg">
            <NavLink to={'/pages-to-read'} style={({ isActive }) => {
                return isActive ? { backgroundColor: "white", color: "#9333ea", fontWeight: "600" } : {};
            }}>
                Pages to Read
            </NavLink>
        </li>
        <li className="font-work-sans text-lg">
            <NavLink to={'/bengali-book'} style={({ isActive }) => {
                return isActive ? { backgroundColor: "white", color: "#9333ea", fontWeight: "600" } : {};
            }}>
                Bengali Books
            </NavLink>
        </li>
        <li className="font-work-sans text-lg">
            <NavLink to={'/contact'} style={({ isActive }) => {
                return isActive ? { backgroundColor: "white", color: "#9333ea", fontWeight: "600" } : {};
            }}>
                Contact
            </NavLink>
        </li>
    </div>

    return (
        <div className="navbar bg-base-100 fixed h-24 container z-10 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img src="https://i.ibb.co/ZVBXn8K/favicon.png" alt="" className="w-10 h-10 rounded-2xl bg-purple-700" />
                    <Link to={`/`} className="lg:text-3xl font-work-sans font-bold">
                        <span className="lg:text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-blue-700 text-transparent bg-clip-text animate-gradient">Paperback Paradise</span>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <Link to={'/sign-in'} className="px-3 lg:px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-white hover:font-bold font-work-sans lg:text-lg font-bold">Sign In</span>
                </Link>
                <Link to={'/sign-up'} className="px-3 lg:px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-[#50b1c94d] text-[#50b1c9] inline-block">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#50b1c9] group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-white hover:font-bold font-work-sans lg:text-lg font-bold">Sign Up</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;