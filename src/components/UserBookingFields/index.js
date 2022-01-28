
import React, { useState } from 'react';
import { format } from 'date-fns'

const UserBookingFields = ({chosenDesk, setLoading, setBookingDetails}) => {

    const [onDate, setOnDate] = useState('')
    const [fromTime, setFromTime] = useState('')
    const [toTime, setToTime] = useState('')

    const handleSubmit = () => {
        setLoading(true);
        setBookingDetails({ toTime, onDate, fromTime, chosenDesk });
    }

    return (
        <div className="w-4/5 flex justify-between">
            <div className="flex flex-col w-1/3">
            {chosenDesk && (<>
              <label className="font-bold mt-2 text-cyan-800" for="on-date">When</label>
              <input onChange={(e) => { setOnDate(e.target.value) }} className="p-2 rounded-md border-2 border-cyan-700 cursor-pointer text-cyan-900" type="date"/>
                <label className="font-bold mt-2 text-cyan-800" for="from-time">From</label>
                    <input onChange={(e) => { setFromTime(e.target.value) }} className="p-2 rounded-md border-2 border-cyan-700 cursor-pointer text-cyan-900" type="time" />
              <label className="font-bold mt-2 text-cyan-800" for="to-time">To</label>
              <input onChange={(e) => { setToTime(e.target.value) }} className="p-2 rounded-md border-2 border-cyan-700 cursor-pointer text-cyan-900" type="time" /></>)}
            </div>

            <div className="flex flex-col justify-between w-2/3 pl-12 pt-6">
                <div className="flex flex-col">
                {chosenDesk &&
                    <p className="font-bold text-lg text-cyan-800">
                        You have selected desk {chosenDesk}
                    </p>}
                {onDate &&
                    <p className="font-bold text-lg text-cyan-800">
                            on {format(new Date(onDate), 'Do MMMM yyyy')}
                    </p>}
                <div className="flex">
                {fromTime &&
                    <p className="font-bold text-lg text-cyan-800">
                        from {fromTime} until {toTime}</p>}
                </div>
                    {chosenDesk && toTime && onDate && <p className="mt-2 text-cyan-800">Selections are not guaranteed until submission. If you're happy with your choice, submit now to complete your booking.</p>}
            </div>

                {chosenDesk && (<div className="flex justify-end md:mt-4">
                    <button className="mr-3 py-1 px-3 rounded-md border-2 border-cyan-700 text-cyan-700 w-24 font-bold hover:bg-cyan-50">Cancel</button>
                    <button onClick={handleSubmit} className="py-1 px-3 rounded-md border-2 border-cyan-600 bg-cyan-600 text-white font-bold hover:bg-cyan-800 hover:border-cyan-800">Submit booking</button>
                </div>)}
</div>
        </div>
    )
}

export default UserBookingFields;