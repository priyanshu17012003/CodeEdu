import React from "react";
import dotted from "../assets/dotted.png";
import HomeCode from "../assets/HomeCode.png";

function Banner() {
  return (
    <>
      <div className="hero bg-gradient-to-b from-[#1d1d1d] via-[#1d1d1d] to-[#041c31] min-h-screen flex flex-col md:flex-row">
        <div className="hero-content w-full md:w-1/2 order-1">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold text-left text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-500">A tool to help in your Adventures</h1>
            <p className="py-6 text-white text-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="relative inline-block">
            <div className="absolute bg-violet-700 opacity-10 rounded-full w-[200px] h-[200px] mt-10 md:w-[450px] md:h-[450px]"></div>
            <div className="absolute bg-violet-700 blur-xl rounded-sm h-12 w-28 bottom-0"></div>
            <button className="relative btn bg-transparent bg-clip-border bg-gradient-to-r from-cyan-300 to-violet-500 hover:text-white">Get Started</button>
            </div>
          </div>
        </div>

        <div className="hero-content w-full md:w-1/2 order-2 relative mt-28 md:mt-0">
        <div className="absolute opacity-11">
          <img src={dotted} alt="" style={{width: "100%", height: "450px"}}/>
        </div>
          <div className="bg-transparent bg-clip-border bg-gradient-to-br from-cyan-300 to-violet-500  h-90 md:h-96 w-screen rounded-3xl relative animate-bounce">
            <img src={HomeCode} alt="" className="w-fit h-fit md:w-full md:h-full"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
