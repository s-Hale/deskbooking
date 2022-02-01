import React from "react";
import Headshot from '../../assets/headshot.png'

const EmployeeModal = ({setOpenEmployeeModal}) => {
  return (
<div className="fixed top-0 left-0 flex items-center justify-center w-full h-full">
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-40"></div>
    <div class="modal-container bg-white w-4/12 mx-auto border-2 border-primaryLighter rounded-xl shadow-lg z-50 overflow-y-auto">
                  <div class="modal-content flex justify-between p-4">
                      <div>
                      <p class="text-xl font-bold text-textColor">Sarah Brown</p>
                      <p class="text-lg text-textColor">Marketing</p>
                          <p class="text-lg text-textColor">from 9.30am until 4.30pm</p>
                    </div>
                      <div className="w-24">
                      <img className="rounded-full" src={Headshot} alt="person" />
                      </div>
                  </div>
                  <div class=" pl-4 pb-4">
          <button onClick={()=> setOpenEmployeeModal(false)} class="bg-midPink px-3 py-2 rounded-md text-white font-bold">Close</button>
        </div>
    </div>
  </div>
  );
};

export default EmployeeModal;
