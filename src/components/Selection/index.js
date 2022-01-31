import React from "react";
import Desk from "../../assets/desk.png";
import { Link } from "react-router-dom";

const Selection = () => {
  const buttonStyle =
    "h-68 hover:bg-blue-100 cursor-pointer pt-8 pb-2 mx-3 border-2 border-gray-400 rounded-md w-60 flex flex-col items-center justify-between";

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col w-3/5">
        <h2 className="mb-4 text-4xl font-bold text-gray-700">
          Desk reservation
        </h2>
        <div className="w-full border-t-2 border-gray-300"></div>
      </div>
      <div className="flex w-3/5 mt-6">
        <Link className={buttonStyle} to="/book-area">
          <div className="w-14">
            <img className="mb-1 opacity-90" src={Desk} alt="desk" />
          </div>
          <h6 className="text-xl font-bold">Book a desk</h6>
          <div className="flex items-center h-20 mt-6">
            <p className="text-sm text-center">
              Select a desk and make a reservation
            </p>
          </div>
        </Link>
        <Link className={buttonStyle} to="/create">
          <i class="fa fa-th" style={{ fontSize: "3.5rem", opacity: 80 }}></i>
          <h6 className="text-xl font-bold">Set up area</h6>
          <div className="flex items-center h-20 mt-6">
            <p className="text-sm text-center">
              Create a floor map of your workspace to help employees choose a
              desk
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Selection;
