import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Success = ({ bookingDetails, areaName }) => {
  const { chosenDesk, toTime, fromTime, onDate } = bookingDetails;
  return (
    <>
      <div className="">
        <h2 className="mb-4 text-4xl font-bold text-textColor">
          Your booking was successful.
        </h2>
        <p className="p-2 mb-6 text-lg border-2 rounded-md text-textColor border-primaryLighter bg-primaryLightest">
          You have reserved <span className="font-bold">Desk {chosenDesk}</span> in <span className="font-bold">{areaName}</span>
          <br></br>
          {onDate && fromTime && toTime && (
            <div>
              on <span className="font-bold">{format(new Date(onDate), "MMM do yyyy")}</span>
              <br></br>
              from <span className="font-bold">{fromTime}</span> until <span className="font-bold">{toTime}</span>
            </div>
          )}
        </p>
        <p className="text-lg text-textColor">Details of your booking have been emailed to <span className="font-bold text-midPink">user@brighthr.com</span></p>
      </div>
      <Link to="/" className="mt-2 text-lg font-bold text-textLink">
        Back to selection
      </Link>
    </>
  );
};

export default Success;
