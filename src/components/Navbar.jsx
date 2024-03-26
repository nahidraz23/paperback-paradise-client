import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {

    const links = <div className="flex flex-col lg:flex-row gap-2 items-center">
        <li className="font-work-sans text-lg">
            <NavLink to={'/'} style={({ isActive }) => {
                return isActive ? { backgroundColor: "white", color: "#23BE0A", fontWeight: "600" } : {};
            }}>Home
            </NavLink>
        </li>
        <li className="font-work-sans text-lg">
            <NavLink to={'/listed-books'} style={({ isActive }) => {
                return isActive ? { backgroundColor: "white", color: "#23BE0A", fontWeight: "600" } : {};
            }}>
                Listed Books
            </NavLink>
        </li>
        <li className="font-work-sans text-lg">
            <NavLink to={'/pages-to-read'} style={({ isActive }) => {
                return isActive ? { backgroundColor: "white", color: "#23BE0A", fontWeight: "600" } : {};
            }}>
                Pages to Read
            </NavLink>
        </li>
    </div>

    return (
        <div className="navbar bg-base-100 my-4 lg:py-12">
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
                    <img src="https://i.ibb.co/mGwS3xm/logo.jpg" alt="" className="w-10 h-10 rounded-2xl" />
                    <a className="lg:text-3xl font-work-sans font-bold">Paperback Paradise</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <a className="btn bg-[#23BE0A] font-semibold font-work-sans text-lg text-white ">Sign In</a>
                <a className="btn bg-[#59C6D2] font-semibold font-work-sans text-lg text-white ">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;