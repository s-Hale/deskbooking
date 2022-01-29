import React from "react";

const UserBookingFields = ({ setFromTime, setToTime, setOnDate }) => (
  <div className=" flex flex-col w-96 ml-2 p-2">
    <label className="font-bold mt-2 text-cyan-800" for="on-date">
      When
    </label>
    <input
      onChange={(e) => {
        setOnDate(e.target.value);
      }}
      className="p-2 rounded-md border-2 border-cyan-700 cursor-pointer text-cyan-900"
      type="date"
    />
    <label className="font-bold mt-2 text-cyan-800" for="from-time">
      From
    </label>
    <input
      onChange={(e) => {
        setFromTime(e.target.value);
      }}
      className="p-2 rounded-md border-2 border-cyan-700 cursor-pointer text-cyan-900"
      type="time"
    />
    <label className="font-bold mt-2 text-cyan-800" for="to-time">
      To
    </label>
    <input
      onChange={(e) => {
        setToTime(e.target.value);
      }}
      className="p-2 rounded-md border-2 border-cyan-700 cursor-pointer text-cyan-900"
      type="time"
    />
  </div>
);

export default UserBookingFields;
