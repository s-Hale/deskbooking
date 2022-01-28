
import React from 'react';
import {Link} from "react-router-dom";



const BookingAreaSelect = () => {
    const buttonStyle = "cursor-pointer border-2 border-cyan-800 w-1/5 p-2 rounded-xl my-2 font-bold text-cyan-900 hover:bg-blue-50"
    return (
        <div className="mt-28 flex flex-col justify-center items-center">
            <div className="flex flex-col w-3/5">
                <h2 className="mb-4 font-bold text-4xl text-gray-700">Book a desk</h2>
                    <div className="w-full border-t-2 border-gray-300"></div>
                </div>

            <div className="flex flex-col w-3/5 mb-4">
            <h2 className="mt-6 font-bold text-xl text-gray-700">Select area</h2>

                <div className="">
                    <Link to="/book-form" state={{ areaName: "Sales" }}><div className={buttonStyle}>Sales</div></Link>
                    <Link to="/book-form" state={{ areaName: "Marketing" }}><div className={buttonStyle}>Marketing</div></Link>
                    <Link to="/book-form" state={{ areaName: "Research" }}><div className={buttonStyle}>Research</div></Link>
                    <Link to="/create">
                        <div className='mt-6 font-bold text-lg text-cyan-800 flex items-center'>
                        <i class="fa fa-plus-square" style={{ fontSize: '2rem', marginRight: '0.5rem' }}></i>
                        Add new area</div>
                    </Link>
                </div>

            </div>




            <Link to="/" className="font-bold text-lg text-cyan-800">Back to selection</Link>
        </div>
    )
}

export default BookingAreaSelect;