import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar bg-neutral-900 max-w-screen-2xl container px-5 bg md:px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-cyan-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-neutral-900 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="text-violet-600">Item 1</a>
              </li>
              <li>
                <a className="text-violet-600">Item 3</a>
              </li>
            </ul>
          </div>
          <p className="btn btn-ghost text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-500 p-0">
            CodeEDU
          </p>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="text-violet-600">Item 1</a>
              </li>
              <li>
                <a className="text-violet-600">Item 2</a>
              </li>
            </ul>
          </div>
          <a className="btn mx-2 ">Login</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
