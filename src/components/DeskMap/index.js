import React, { useState } from "react";
import UserInputForm from "../UserInputForm/";
import UserBookingFields from "../UserBookingFields";
import BookingSummary from "../BookingSummary";
import AreaName from "../AreaName";
import SetupSuccess from "../SetupSuccess/";
import styled from "styled-components";

const DeskMap = ({
  incomingAreaName,
  mockData,
  fixedView,
  setLoading,
  setBookingDetails,
  setOpenEmployeeModal
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
  const [setupLoading, setSetupLoading] = useState(false);
  const [showSetupSuccess, setShowSetupSuccess] = useState(false);

  const howManyRows = Math.ceil(numberDesks / numberColumns);


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

  if (setupLoading) {
    setTimeout(() => {
      setSetupLoading(false);
      setShowSetupSuccess(true);
    }, 1500);
  }

  const desks =
    mockData?.desks || Array.from({ length: numberDesks }, (_, i) => i);
  const occupied = mockData?.occupied;


  return (
    <div className="flex flex-col items-center">

      {setupLoading && <div className="mt-10">
        <i
          class="fa fa-spinner fa-spin"
          style={{ fontSize: "3.5rem", color: '#AD005C' }}
        ></i>
      </div>}
      {showSetupSuccess && <SetupSuccess areaName={areaName} />}
      {!setupLoading && !showSetupSuccess&&(<>
        {!fixedView && (
          <div className="flex flex-col w-3/5 mt-8">
            <h2 className="mb-4 text-4xl font-bold text-gray-700">
              Set up an area
            </h2>
            <div className="w-full border-t-2 border-gray-300"></div>
          </div>
        )}
        {!fixedView ? (
          <div className="flex w-3/5">
            <AreaName areaName={areaName} setAreaName={setAreaName} setSetupLoading={setSetupLoading}></AreaName>
          </div>
        ) : (
          <h2 className="text-xl font-bold text-textColor">{incomingAreaName}</h2>
        )}
        {/* <p className="font-bold">With {numberDesks} desks and {numberColumns} cols there must be {howManyRows} rows</p> */}
        <div className="flex justify-between p-1 mt-3 min-w-60 max-w-90">
          <StyledDesks className="grid p-1 border rounded-md border-primaryLighter">
            {desks.map((seat) => (
              <span
                key={seat}
                className={`${Number(chosenDesk) === seat ? "bg-primary" : "bg-primaryLightest"
                  } m-0.5 rounded-md w-20 h-11`}
              >
                <button
                  value={seat}
                  onClick={(e) => {
                    if(fixedView && !occupied?.includes(seat)) handleDeskSelection(e)
                    if (fixedView && occupied?.includes(seat)) setOpenEmployeeModal(true)
                    if (!fixedView) return;
                    }
                  }
                  className={`${occupied?.includes(seat)
                      ? "bg-gray-200 text-gray-500 hover:bg-gray-300"
                      : `${fixedView &&
                      "hover:bg-primaryLighter hover:scale-105 hover:border-primary cursor-pointer"
                      } border-primary text-textColor`
                    } ${!fixedView&& 'cursor-default'} w-20 h-11 border rounded-md text-xs flex items-center justify-center font-bold`}
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
      </>)}
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
    </div>
  );
};

export default DeskMap;
