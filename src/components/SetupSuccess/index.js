import React from "react";
import { Link } from "react-router-dom";


const SetupSuccess = ({areaName}) => {
  return (
    <>
          <div className="mt-10">
          <div className="flex justify-center mb-6"><i class="fa fa-check-circle" style={{ fontSize: "48px", color: "#E10078" }}></i></div>
        <h2 className="mb-4 text-4xl font-bold text-textColor">
                  Area map '{areaName}' saved
        </h2>

        <p className="text-lg text-textColor">Create another area, or head to our booking system to reserve a desk.</p>
      </div>
      <Link to="/" className="mt-6 text-lg font-bold text-textLink">
        Back to selection
      </Link>
    </>
  );
};

export default SetupSuccess;
