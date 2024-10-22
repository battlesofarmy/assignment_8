import { NavLink } from "react-router-dom"

export default function Navbar() {

    const navLinks = <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/listedbook'>Listed Book</NavLink></li>
            <li><NavLink to='/pagetoread'>Page To Read</NavLink></li>
    </>

  return (
    <section id="nav">

    <div className="container">
        <div className="navbar bg-base-100 my-6">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="" className="lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {navLinks}
                </ul>
                </div>
                <h2 className="text-3xl font-bold" style={{margin: '0px', padding: "0px", color: "#23be0a"}}>Books Pro</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                <a className="mybtn mx-2 bgPrimary">Sing In</a>
                <a className="mybtn mx-2 bgSecondary">Sing Up</a>
            </div>

            </div>
    </div>
    
    </section>
  )
}
