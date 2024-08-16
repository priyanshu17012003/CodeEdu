import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div className="hero bg-gradient-to-b from-[#1d1d1d] via-[#1d1d1d] to-[#041c31] flex flex-col min-h-screen justify-center items-center md:flex-row-reverse">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center mx-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-500">
              Welcome!
            </span> 
            Thank you for signing up on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-500">
              CodeEdu
            </span>
          </h1>
          <p className="py-6 text-white text-sm sm:text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="card bg-base-100 shrink-0 shadow-2xl w-full max-w-sm p-4">
          <form className="card-body">
            <Link
              to="/"
              className="btn btn-sm absolute right-2 top-2 bg-transparent bg-clip-border bg-gradient-to-r from-cyan-300 to-violet-500"
            >
              ✕
            </Link>
            <div className="form-control">
              <h2 className="text-2xl font-bold mb-4 text-violet-600">SignUp</h2>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
              />
            </div>
            <div className="card-actions flex justify-between mt-6">
              <button className="btn bg-transparent bg-clip-border bg-gradient-to-r from-cyan-300 to-violet-500 hover:text-white">
                SignUp
              </button>
              <span className="mt-4">
                Already registered?
                <Link to="/" className="text-violet-600 ml-1">
                  Login!
                </Link>
              </span>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
