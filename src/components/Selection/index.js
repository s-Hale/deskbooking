
import React from 'react';
import Desk from '../../assets/desk.png'

const Selection = () => {
    const buttonStyle = 'h-64 hover:bg-blue-200 cursor-pointer pt-8 mx-3 border border-gray-500 rounded-md w-60 flex flex-col items-center justify-between';

    return (
        <div className="mt-28 flex flex-col justify-center w-4/5 items-center">
            <div className="flex flex-col w-3/5">
              <h2 className="mb-4 font-bold text-4xl text-gray-700">Desk reservation</h2>
              <div className="w-full border-t-2 border-gray-300"></div>
            </div>
            <div className="flex w-3/5 mt-6">

                <div className={buttonStyle}>
                <div className="w-14"><img className="mb-1 opacity-90" src={Desk} alt="desk"/></div>
                    <h6 className="font-bold text-xl">Book a desk</h6>
                    <div className="mt-6 h-20 flex items-center">
                        <p className="text-center">Select a desk and make a reservation</p>
                        </div>

                </div>
                <div className={buttonStyle}>
              <i class="fa fa-th" style={{ fontSize: '3.5rem', opacity: 80}}></i>
                    <h6 className="font-bold text-xl">Set up area</h6>
                    <div className="mt-6 h-20 flex items-center">

                        <p className="text-center">Create a floor map of your workspace to help employees choose a desk</p>
                        </div>
                </div>
                </div>
        </div>
    )
}

export default Selection;