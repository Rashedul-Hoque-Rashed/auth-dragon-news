import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handelSingOut = () => {
        logOut()
            .then(res => console.log('sing out successful', res?.user))
            .catch (err => console.error(err))
    }
    


const navLinks = <>
    <li><NavLink to="/" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-blue-800 font-semibold underline" : ""}>Home</NavLink></li>
    <li><NavLink to="/about" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-blue-800 font-semibold underline" : ""}>About</NavLink></li>
    <li><NavLink to="/career" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-blue-800 font-semibold underline" : ""}>Career</NavLink></li>
</>

return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="gap-5 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-5 px-1">
                {navLinks}
            </ul>
        </div>
        <div className="navbar-end">
            <div className="flex items-center gap-3">
                <img className="w-10 h-10" src="https://i.ibb.co/yYq9GXn/user.png" alt="" />

                {
                    user ? <button onClick={handelSingOut} className="btn normal-case text-[#FFF] text-xl font-semibold bg-[#403F3F] px-8 hover:bg-zinc-800">Sinh Out</button>
                        :
                        <Link to="/login" className="btn normal-case text-[#FFF] text-xl font-semibold bg-[#403F3F] px-8 hover:bg-zinc-800">Login</Link>
                }


            </div>
        </div>
    </div>
);
};

export default Navbar;