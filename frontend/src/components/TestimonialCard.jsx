import React from "react";
import defaultUser from "../assets/defaultUser.jpg";

function Card({ item }) {
  return (
    <div className={`p-6 sm:p-8 md:p-12 w-full sm:w-80 md:w-72 lg:w-80 shadow-lg transition-transform transform hover:shadow-2xl rounded-3xl text-white mx-auto ${item.bgColor}`}>
      <div className="flex justify-center -mt-8">
        <div className="avatar">
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-14 md:h-14 mt-4 md:mt-3 lg:w-16 lg:h-16 rounded-full border-2 border-white">
            <img src={defaultUser} alt="User" />
          </div>
        </div>
      </div>
      <div className="card-body p-4">
        <h2 className="card-title text-lg sm:text-xl md:text-lg lg:text-xl font-semibold text-center">{item.name}</h2>
        <p className="text-gray-200 mb-4 text-center text-sm md:text-base">{item.text}</p>
      </div>
    </div>
  );
}

export default Card;
