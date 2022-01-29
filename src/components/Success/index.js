import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Success = ({ bookingDetails, areaName }) => {
  const { chosenDesk, toTime, fromTime, onDate } = bookingDetails;
  return (
    <>
      <div className="">
        <h2 className="mb-4 font-bold text-4xl text-cyan-900">
          Your booking was successful.
        </h2>
        <p className="font-bold text-lg text-cyan-800 mb-6">
          Desk {chosenDesk} in {areaName}
          <br></br>
          {onDate && fromTime && toTime && (
            <div>
              {format(new Date(onDate), "MMM do yyyy")}
              <br></br>
              {fromTime} to {toTime}
            </div>
          )}
        </p>
      </div>
      <Link to="/" className="font-bold text-lg text-cyan-800">
        Back to selection
      </Link>
    </>
  );
};

export default Success;
