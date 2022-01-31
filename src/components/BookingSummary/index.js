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
    <div className="w-4/5">
      {chosenDesk && (
        <p className="text-lg font-bold text-cyan-800">
          You have selected desk {chosenDesk} in {areaName}
        </p>
      )}
      {onDate && (
        <p className="text-lg font-bold text-cyan-800">
          on {format(new Date(onDate), "MMM do yyyy")}
        </p>
      )}
      <div className="flex">
        {fromTime && (
          <p className="text-lg font-bold text-cyan-800">
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
          <button className="w-24 px-3 py-1 mr-3 font-bold border-2 rounded-md border-cyan-700 text-cyan-700 hover:bg-cyan-50">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-3 py-1 font-bold text-white border-2 rounded-md border-cyan-600 bg-cyan-600 hover:bg-cyan-800 hover:border-cyan-800"
          >
            Submit booking
          </button>
        </div>
      )}
    </div>
  );
};
export default BookingSummary;
