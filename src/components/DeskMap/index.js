import React, { useState } from "react";
import UserInputForm from "../UserInputForm/";
import UserBookingFields from "../UserBookingFields";
import BookingSummary from "../BookingSummary";
import AreaName from "../AreaName";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DeskMap = ({
  incomingAreaName,
  mockData,
  fixedView,
  setLoading,
  setBookingDetails,
}) => {
  const [numberDesks, setNumberDesks] = useState(24);
  const [numberColumns, setNumberColumns] = useState(
    mockData?.numberColumns || 8
  );
  const [groupGapOne, setGroupGapOne] = useState(mockData?.groupGapOne || 2);
  const [groupGapTwo, setGroupGapTwo] = useState(mockData?.groupGapTwo || 6);
  const [groupGapThree, setGroupGapThree] = useState(
    mockData?.groupGapThree || 0
  );
  const [groupGapFour, setGroupGapFour] = useState(mockData?.groupGapFour || 0);
  const [chosenDesk, setChosenDesk] = useState();
  const [areaName, setAreaName] = useState(incomingAreaName || "");
  const [onDate, setOnDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  const StyledDesks = styled.div`
    & > span:nth-of-type(${numberColumns}n + ${groupGapOne}) {
      margin-right: 26px;
    }
    & > span:nth-of-type(${numberColumns}n + ${groupGapTwo}) {
      margin-right: 26px;
    }
    & > span:nth-of-type(${numberColumns}n + ${groupGapThree}) {
      margin-right: 26px;
    }
    & > span:nth-of-type(${numberColumns}n + ${groupGapFour}) {
      margin-right: 26px;
    }

    grid-template-columns: repeat(${numberColumns}, min-content);
  `;

  const handleDeskSelection = (e) => {
    setChosenDesk(e.target.value);
  };

  const desks =
    mockData?.desks || Array.from({ length: numberDesks }, (_, i) => i);
  const occupied = mockData?.occupied;

  return (
    <div className="flex flex-col items-center">
      {!fixedView && (
        <div className="flex flex-col w-3/5 mt-20">
          <h2 className="mb-4 text-4xl font-bold text-gray-700">
            Set up an area
          </h2>
          <div className="w-full border-t-2 border-gray-300"></div>
        </div>
      )}
      {!fixedView ? (
        <div className="flex w-3/5">
          <AreaName areaName={areaName} setAreaName={setAreaName}></AreaName>
        </div>
      ) : (
        <h2 className="text-xl font-bold text-cyan-800">{incomingAreaName}</h2>
      )}

      <div className="flex justify-between p-1 mt-3 min-w-60 max-w-90">
        <StyledDesks className="grid p-1 border rounded-md border-cyan-800 border-opacity-60">
          {desks.map((seat) => (
            <span
              key={seat}
              className={`${
                Number(chosenDesk) === seat ? "bg-cyan-600" : "bg-blue-50"
              } m-1 rounded-md w-24 h-12`}
            >
              <button
                value={seat}
                disabled={occupied?.includes(seat) || !fixedView}
                onClick={(e) => handleDeskSelection(e)}
                className={`${
                  occupied?.includes(seat)
                    ? "bg-gray-200 cursor-not-allowed text-gray-500 "
                    : `${
                        fixedView &&
                        "hover:bg-cyan-600 hover:scale-105 hover:border-cyan-600 cursor-pointer"
                      } border-gray-400 text-gray-800`
                }
                            w-24 h-12 border rounded-md text-xs flex items-center justify-center`}
              >
                {seat}
              </button>
            </span>
          ))}
        </StyledDesks>

        {!fixedView ? (
          <UserInputForm
            numberDesks={numberDesks}
            numberColumns={numberColumns}
            groupGapOne={groupGapOne}
            groupGapTwo={groupGapTwo}
            groupGapThree={groupGapThree}
            groupGapFour={groupGapFour}
            setNumberDesks={setNumberDesks}
            setNumberColumns={setNumberColumns}
            setGroupGapOne={setGroupGapOne}
            setGroupGapTwo={setGroupGapTwo}
            setGroupGapThree={setGroupGapThree}
            setGroupGapFour={setGroupGapFour}
          />
        ) : (
          <UserBookingFields
            chosenDesk={chosenDesk}
            setLoading={setLoading}
            setFromTime={setFromTime}
            setToTime={setToTime}
            setOnDate={setOnDate}
          />
        )}
      </div>
      {fixedView && (
        <BookingSummary
          chosenDesk={chosenDesk}
          areaName={areaName}
          onDate={onDate}
          fromTime={fromTime}
          toTime={toTime}
          setLoading={setLoading}
          setBookingDetails={setBookingDetails}
        />
      )}

      <Link to="/" className="mt-4 text-lg font-bold text-cyan-800">
        Back to selection
      </Link>
    </div>
  );
};

export default DeskMap;
