import React, { useState } from "react";
import styled from "styled-components";

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
        <label className="text-gray-500 font-bold text-lg mr-3 my-2.5">
          Area name:
        </label>
        {!showInput && (
          <h2 className="text-xl font-bold text-cyan-800">{areaName}</h2>
        )}
        <form onSubmit={handleSubmit}>
          {showInput && (
            <input
              onChange={(e) => setAreaName(e.target.value)}
              value={areaName}
              className="h-12 p-2 ml-2 text-lg border border-gray-500 w-60 rounded-xl"
            ></input>
          )}
          {showInput && (
            <StyledSave
              type="submit"
              className="ml-2 p-1.5 font-bold text-cyan-900"
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
        <button className="w-24 px-3 py-1 font-bold text-white border-2 rounded-md border-cyan-800 bg-cyan-800 hover:bg-cyan-700 hover:border-cyan-700">
          Save
        </button>
        <button className="w-24 px-3 py-1 ml-2 font-bold border-2 rounded-md border-cyan-700 text-cyan-700 hover:bg-blue-50">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AreaName;
