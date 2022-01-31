import React from "react";
import { Link } from "react-router-dom";

const BookingAreaSelect = () => {
  const buttonStyle =
    "cursor-pointer border-2 border-cyan-800 w-1/2 p-2 rounded-xl my-2 font-bold text-cyan-900 hover:bg-blue-50";

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col w-3/5">
        <h2 className="mb-4 text-4xl font-bold text-gray-700">
          Book a workspace
        </h2>
        <div className="w-full border-t-2 border-gray-300"></div>
      </div>

      <div className="flex w-3/5 mb-16">
        <div className="flex flex-col justify-between w-1/2">
          <div>
            <h2 className="mt-6 text-xl font-bold text-gray-700">
              Book a desk
            </h2>
            <h2 className="text-gray-700">
              Choose a desk in one of the following areas
            </h2>
          </div>
          <div className="">
            <Link to="/book-form" state={{ areaName: "Sales" }}>
              <div className={buttonStyle}>Sales</div>
            </Link>
            <Link to="/book-form" state={{ areaName: "Marketing" }}>
              <div className={buttonStyle}>Marketing</div>
            </Link>
            <Link to="/book-form" state={{ areaName: "Research" }}>
              <div className={buttonStyle}>Research</div>
            </Link>
            <Link to="/create">
              <div className="flex items-center mt-6 text-lg font-bold text-cyan-800">
                <i
                  class="fa fa-plus-square"
                  style={{ fontSize: "2rem", marginRight: "0.5rem" }}
                ></i>
                Add new area
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between w-1/2">
          <h2 className="mt-6 text-xl font-bold text-gray-700">
            Book a meeting room
          </h2>
          <h2 className="text-white">
            Choose a desk in one of the following areas
          </h2>

          <div className="">
            <Link to="">
              <div className={buttonStyle}>Conference Room</div>
            </Link>
            <Link to="">
              <div className={buttonStyle}>Meeting room 1</div>
            </Link>
            <Link to="">
              <div className={buttonStyle}>Garden</div>
            </Link>

            <Link to="">
              <div className="flex items-center mt-6 text-lg font-bold text-cyan-800">
                <i
                  class="fa fa-plus-square"
                  style={{ fontSize: "2rem", marginRight: "0.5rem" }}
                ></i>
                Add new meeting room
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Link to="/" className="text-lg font-bold text-cyan-800">
        Back to selection
      </Link>
    </div>
  );
};

export default BookingAreaSelect;
