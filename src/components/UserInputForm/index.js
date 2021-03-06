import React, { useState } from "react";
import styled from "styled-components";

const NoArrowInput = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const UserInputForm = ({
  rotateDesk,
  numberDesks,
  setNumberDesks,
  numberColumns,
  setNumberColumns,
  deskMargin,
  setDeskMargin,
  rowGapOne,
  setRowGapOne,
  rowGapTwo,
  setRowGapTwo,
  rowGapFour,
  setRowGapFour,
  rowGapThree,
  setRowGapThree,
  groupGapOne,
  setGroupGapOne,
  groupGapTwo,
  setGroupGapTwo,
  groupGapThree,
  setGroupGapThree,
  groupGapFour,
  setGroupGapFour,
}) => {
  const [extraColumns, setExtraColumns] = useState(false);
  const inputPairStyling = "flex justify-between items-center w-40";

  return (
    <div className="flex flex-col p-2 ml-2 border rounded-md border-primaryLighter w-96">
      <div className="flex items-center justify-between">
        <div className={inputPairStyling}>
          <p className="font-bold text-textColor">Number of Desks</p>
          <NoArrowInput
            type="number"
            value={numberDesks}
            min="2"
            max="75"
            onChange={(e) => setNumberDesks(e.target.value)}
            className="p-1 font-bold text-center border-2 rounded-md w-14 border-inputGray"
          ></NoArrowInput>
        </div>
        <div className={inputPairStyling}>
          <p className="font-bold text-textColor">Divided into columns</p>
          <NoArrowInput
            type="number"
            min="1"
            max="12"
            value={numberColumns}
            onChange={(e) => setNumberColumns(e.target.value)}
            className="w-16 p-1 font-bold text-center border-2 rounded-md border-inputGray"
          ></NoArrowInput>
        </div>

      </div>
      <button onClick={rotateDesk} className="flex items-center w-2/5 px-1 my-1 border rounded-md cursor-pointer border-primaryLightest bg-primaryLightest hover:border-primaryLighter hover:bg-primaryLighter">
      <i class="fa fa-undo" style={{fontSize: "22px", color: '#333' }}></i><span className="ml-2 font-bold text-textColor">Rotate desks</span>
          </button>
      <div className="flex items-center justify-between mt-2">
        <div className={inputPairStyling}>
          <p className="font-bold text-textColor">Insert space at column</p>
          <NoArrowInput
            type="number"
            value={groupGapOne}
            onChange={(e) => setGroupGapOne(e.target.value)}
            className="w-12 p-1 font-bold text-center border-2 rounded-md border-inputGray"
          ></NoArrowInput>
        </div>
        <div className={inputPairStyling}>
          <p className="font-bold text-textColor">Insert space at column</p>
          <NoArrowInput
            type="number"
            value={groupGapTwo}
            onChange={(e) => setGroupGapTwo(e.target.value)}
            className="w-12 p-1 font-bold text-center border-2 rounded-md border-inputGray"
          ></NoArrowInput>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
<div className={inputPairStyling}>
  <p className="font-bold text-textColor">Insert space at row</p>
  <NoArrowInput
    type="number"
    value={rowGapOne}
    onChange={(e) => setRowGapOne(e.target.value)}
    className="w-12 p-1 font-bold text-center border-2 rounded-md border-inputGray"
  ></NoArrowInput>
</div>
<div className={inputPairStyling}>
  <p className="font-bold text-textColor">Insert space at row</p>
  <NoArrowInput
    type="number"
    value={rowGapTwo}
    onChange={(e) => setRowGapTwo(e.target.value)}
    className="w-12 p-1 font-bold text-center border-2 rounded-md border-inputGray"
  ></NoArrowInput>
</div>
</div>
      <div className="flex justify-center p-1">
        <button
          onClick={() => setExtraColumns(!extraColumns)}
          className="w-auto px-3 py-2 mt-2 font-bold text-textColor bg-primaryLightest rounded-xl hover:bg-primaryLighter"
        >
          {extraColumns ? "Hide" : "Additional spacing"}
        </button>
      </div>

      {extraColumns && (
        <>
  <div className="flex items-center justify-between mt-2">
  <div className={inputPairStyling}>
    <p className="font-bold text-textColor">Insert space at column</p>
    <NoArrowInput
      type="number"
      value={groupGapThree}
      onChange={(e) => setGroupGapThree(e.target.value)}
      className="w-12 p-1 font-bold text-center border-2 rounded-md border-inputGray"
    ></NoArrowInput>
  </div>
  <div className={inputPairStyling}>
    <p className="font-bold text-textColor">Insert space at column</p>
    <NoArrowInput
      type="number"
      value={groupGapFour}
      onChange={(e) => setGroupGapFour(e.target.value)}
      className="w-12 p-1 font-bold text-center border-2 rounded-md border-inputGray"
    ></NoArrowInput>
  </div>
</div>

<div className="flex items-center justify-between mt-2">
<div className={inputPairStyling}>
  <p className="font-bold text-textColor">Insert space at row</p>
  <NoArrowInput
    type="number"
    value={rowGapThree}
    onChange={(e) => setRowGapThree(e.target.value)}
    className="w-12 p-1 font-bold text-center border-2 rounded-md border-inputGray"
  ></NoArrowInput>
</div>
<div className={inputPairStyling}>
  <p className="font-bold text-textColor">Insert space at row</p>
  <NoArrowInput
    type="number"
    value={rowGapFour}
    onChange={(e) => setRowGapFour(e.target.value)}
    className="w-12 p-1 font-bold text-center border-2 rounded-md border-inputGray"
  ></NoArrowInput>
</div>
</div>
<div className="flex items-center justify-between mt-2">
<div className={inputPairStyling}>
  <p className="font-bold text-textColor">Space between desks</p>
    <NoArrowInput
      min="0"
      max="4"
    type="number"
    value={deskMargin}
    onChange={(e) => setDeskMargin(e.target.value)}
    className="w-12 p-1 font-bold text-center border-2 rounded-md border-inputGray"
  ></NoArrowInput>
</div>
          </div>
          </>
      )}
    </div>
  );
};

export default UserInputForm;
