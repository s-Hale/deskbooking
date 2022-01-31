import React from "react";
import { format } from "date-fns";

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
    <div className="w-11/12 px-3">
      {chosenDesk && (
        <p className="text-lg font-bold text-textColor">
          You have selected desk {chosenDesk} in {areaName}
        </p>
      )}
      {onDate && (
        <p className="text-lg font-bold text-textColor">
          on {format(new Date(onDate), "MMM do yyyy")}
        </p>
      )}
      <div className="flex">
        {fromTime && (
          <p className="text-lg font-bold text-textColor">
            from {fromTime} until {toTime}
          </p>
        )}
      </div>
      {chosenDesk && toTime && onDate && (
        <p className="p-2 mt-2 border rounded-xl text-textColor border-primary bg-primaryLightest">
          Selections are not guaranteed until submission. If you're happy with
          your choice, submit now to complete your booking.
        </p>
      )}

      {chosenDesk && (
        <div className="flex justify-end md:mt-4">
          <button className="w-24 px-3 py-1 mr-3 font-bold border-2 rounded-md border-midPink text-midPink hover:bg-darkPink">
            Cancel
          </button>
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
