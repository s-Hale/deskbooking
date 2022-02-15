import React from "react";

const UserBookingFields = ({ setFromTime, setToTime, setOnDate }) => (
  <div className="flex flex-col px-2 ml-2 w-96">
    <label className="font-bold text-textColor" for="on-date">
      When
    </label>
    <input
      onChange={(e) => {
        setOnDate(e.target.value);
      }}
      className="p-2 font-bold border-2 rounded-md cursor-pointer border-inputGray text-textColor"
      type="date"
    />
    <label className="mt-2 font-bold text-textColor" for="from-time">
      From
    </label>
    <input
      onChange={(e) => {
        setFromTime(e.target.value);
      }}
      className="p-2 font-bold border-2 rounded-md cursor-pointer border-inputGray text-textColor"
      type="time"
    />
    <label className="mt-2 font-bold text-textColor" for="to-time">
      To
    </label>
    <input
      onChange={(e) => {
        setToTime(e.target.value);
      }}
      className="p-2 font-bold border-2 rounded-md cursor-pointer border-inputGray text-textColor"
      type="time"
    />
  </div>
);

export default UserBookingFields;
