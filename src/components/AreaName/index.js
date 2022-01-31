import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledSave = styled.button`
  :hover {
    text-shadow: 0 0 20px #1b3447;
  }
`;

const AreaName = ({ areaName, setAreaName }) => {
  const [showInput, setShowInput] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowInput(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setShowInput(true);
  };

  return (
    <div className="flex items-center justify-between w-full mt-2">
      <div className="flex items-center">
        <label className="text-textColor font-bold text-lg mr-3 my-2.5">
          Area name:
        </label>
        {!showInput && (
          <h2 className="text-xl font-bold text-textColor">{areaName}</h2>
        )}
        <form onSubmit={handleSubmit}>
          {showInput && (
            <input
              onChange={(e) => setAreaName(e.target.value)}
              value={areaName}
              className="h-12 p-2 ml-2 text-lg font-bold border-2 border-inputGray w-60 rounded-xl"
            ></input>
          )}
          {showInput && (
            <StyledSave
              type="submit"
              className="ml-2 p-1.5 font-bold text-gray-500"
            >
              save
            </StyledSave>
          )}
          {!showInput && (
            <button onClick={handleEdit} className="p-1 ml-8">
              {" "}
              <i
                class="fa fa-pencil"
                style={{ fontSize: "24px", color: "#1b3447" }}
              ></i>
            </button>
          )}
        </form>
      </div>

      <div className="flex items-center">
        <button className="w-24 px-3 py-1 font-bold text-white border-2 rounded-md border-midPink bg-midPink hover:bg-darkPink hover:border-darkPink">
          Save
        </button>
        <Link
          to="/"
          className="w-24 px-3 py-1 ml-2 font-bold text-center border-2 rounded-md border-midPink text-midPink hover:bg-darkPink hover:text-white hover:border-darkPink">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default AreaName;
