import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";


const BookingSummary = ({
  chosenDesk,
  areaName,
  onDate,
  toTime,
  fromTime,
  setLoading,
  setBookingDetails,
}) => {
  const handleSubmit = () => {
    setLoading(true);
    setBookingDetails({ chosenDesk, areaName, onDate, fromTime, toTime });
  };

  return (
    <div className="w-11/12 px-3 mt-2">
      {!chosenDesk && <p className="text-lg text-textColor">Select a desk from the map above</p>}
      {chosenDesk && (
        <p className="text-lg text-textColor">
          You have selected <span className="font-bold">Desk {chosenDesk}</span> in <span className="font-bold">{areaName}</span>
        </p>
      )}
      {onDate && (
        <p className="text-lg text-textColor">
          on <span className="font-bold">{format(new Date(onDate), "MMM do yyyy")}</span>
        </p>
      )}
      <div className="flex">
        {fromTime && (
          <p className="text-lg text-textColor">
            from <span className="font-bold">{fromTime}</span> until <span className="font-bold">{toTime}</span>
          </p>
        )}
      </div>
      {chosenDesk && toTime && onDate && (
        <p className="p-3 mt-2 border rounded-xl text-textColor border-primary bg-primaryLightest">
          Selections are not guaranteed until submission. If you're happy with
          your choice, submit now to complete your booking.
        </p>
      )}

      {chosenDesk && (
        <div className="flex justify-end md:mt-4">
          <Link to='/' className="w-24 px-3 py-1 mr-3 font-bold text-center border-2 rounded-md border-midPink text-midPink hover:bg-darkPink hover:text-white hover:border-darkPink">
            Cancel
          </Link>
          <button
            onClick={handleSubmit}
            className="px-3 py-1 font-bold text-white border-2 rounded-md border-midPink bg-midPink hover:bg-darkPink hover:border-darkPink"
          >
            Submit booking
          </button>
        </div>
      )}
    </div>
  );
};
export default BookingSummary;
