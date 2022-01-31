import React, { useState } from "react";
import DeskMap from "../DeskMap/index";
import Success from "../Success/index";
import { useLocation } from "react-router-dom";

const BookingForm = () => {
  const location = useLocation();
  const { areaName } = location.state;
  const [loading, setLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const dataToSend = () => {
    const mockDataSales = {
      desks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      occupied: [9, 12, 13],
      numberColumns: 4,
      groupGapOne: 2,
      groupGapTwo: 0,
    };

    const mockDataMarketing = {
      desks: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36
      ],
      occupied: [8, 9, 12, 20, 27, 32, 33, 14, 15, 22, 23],
      numberColumns: 8,
      groupGapOne: 2,
      groupGapTwo: 4,
      groupGapThree: 5,
    };

    const mockDataResearch = {
      desks: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22,
      ],
      occupied: [6, 7, 11, 12, 14, 19, 20, 21],
      numberColumns: 5,
      groupGapOne: 2,
      groupGapTwo: 3,
    };

    if (areaName === "Sales") return mockDataSales;
    if (areaName === "Marketing") return mockDataMarketing;
    if (areaName === "Research") return mockDataResearch;
  };
  if (loading) {
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
    }, 2000);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      {loading && (
        <div className="">
          <i
            class="fa fa-spinner fa-spin"
            style={{ fontSize: "3.5rem", color: '#AD005C' }}
          ></i>
        </div>
      )}
      {showSuccess && (
        <Success bookingDetails={bookingDetails} areaName={areaName} />
      )}
      {!loading && !showSuccess && (
        <>
          <div className="flex flex-col w-3/5">
            <h2 className="mb-4 text-4xl font-bold text-gray-700">
              Book a desk
            </h2>
            <div className="w-full border-t-2 border-gray-300"></div>
          </div>
          <div className="mt-2 mb-4">
            <DeskMap
              incomingAreaName={areaName}
              mockData={dataToSend(areaName)}
              fixedView
              setLoading={setLoading}
              setBookingDetails={setBookingDetails}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BookingForm;
