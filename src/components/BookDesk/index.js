
import React from 'react';
import {Link} from "react-router-dom";



const BookDesk = () => {
    return (
        <div className="mt-28 flex flex-col justify-center items-center">
            <div className="flex flex-col w-3/5">
                <h2 className="mb-4 font-bold text-4xl text-gray-700">Book a desk</h2>
                    <div className="w-full border-t-2 border-gray-300"></div>
                </div>

            <div className="flex w-3/5">- select an area, then dates. display area map.</div>
            <Link to="/" className="font-bold text-lg text-cyan-800">Back to selection</Link>
        </div>
    )
}

export default BookDesk;