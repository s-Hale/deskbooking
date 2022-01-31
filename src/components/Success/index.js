import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Success = ({ bookingDetails, areaName }) => {
  const { chosenDesk, toTime, fromTime, onDate } = bookingDetails;
  return (
    <>
      <div className="">
        <h2 className="mb-4 text-4xl font-bold text-cyan-900">
          Your booking was successful.
        </h2>
        <p className="mb-6 text-lg font-bold text-cyan-800">
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
      <Link to="/" className="text-lg font-bold text-cyan-800">
        Back to selection
      </Link>
    </>
  );
};

export default Success;
