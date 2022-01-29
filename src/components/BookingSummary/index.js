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
    <div className=" w-4/5">
      {chosenDesk && (
        <p className="font-bold text-lg text-cyan-800">
          You have selected desk {chosenDesk} in {areaName}
        </p>
      )}
      {onDate && (
        <p className="font-bold text-lg text-cyan-800">
          on {format(new Date(onDate), "MMM do yyyy")}
        </p>
      )}
      <div className="flex">
        {fromTime && (
          <p className="font-bold text-lg text-cyan-800">
            from {fromTime} until {toTime}
          </p>
        )}
      </div>
      {chosenDesk && toTime && onDate && (
        <p className="mt-2 text-cyan-800">
          Selections are not guaranteed until submission. If you're happy with
          your choice, submit now to complete your booking.
        </p>
      )}

      {chosenDesk && (
        <div className="flex justify-end md:mt-4">
          <button className="mr-3 py-1 px-3 rounded-md border-2 border-cyan-700 text-cyan-700 w-24 font-bold hover:bg-cyan-50">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="py-1 px-3 rounded-md border-2 border-cyan-600 bg-cyan-600 text-white font-bold hover:bg-cyan-800 hover:border-cyan-800"
          >
            Submit booking
          </button>
        </div>
      )}
    </div>
  );
};
export default BookingSummary;
