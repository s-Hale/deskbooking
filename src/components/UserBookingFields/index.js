import React from "react";

const UserBookingFields = ({ setFromTime, setToTime, setOnDate }) => (
  <div className="flex flex-col p-2 ml-2  w-96">
    <label className="mt-2 font-bold text-cyan-800" for="on-date">
      When
    </label>
    <input
      onChange={(e) => {
        setOnDate(e.target.value);
      }}
      className="p-2 border-2 rounded-md cursor-pointer border-cyan-700 text-cyan-900"
      type="date"
    />
    <label className="mt-2 font-bold text-cyan-800" for="from-time">
      From
    </label>
    <input
      onChange={(e) => {
        setFromTime(e.target.value);
      }}
      className="p-2 border-2 rounded-md cursor-pointer border-cyan-700 text-cyan-900"
      type="time"
    />
    <label className="mt-2 font-bold text-cyan-800" for="to-time">
      To
    </label>
    <input
      onChange={(e) => {
        setToTime(e.target.value);
      }}
      className="p-2 border-2 rounded-md cursor-pointer border-cyan-700 text-cyan-900"
      type="time"
    />
  </div>
);

export default UserBookingFields;
