
import React from 'react';



const UserInputForm = ({numberHeight, setNumberHeight, numberColumns, setNumberColumns, groupGapOne, setGroupGapOne, groupGapTwo, setGroupGapTwo}) => {
    return (
        <div className="flex flex-col p-2 w-2/5 border border-indigo-900 rounded-md">
            <div className="flex items-center">
            <p className="mr-2">Number of Desks</p>
                <input
                    type="number"
                    value={numberHeight}
                    min="2"
                    onChange={(e) => setNumberHeight(e.target.value)}
                    className="text-center w-14 p-1 border border-gray-600 rounded-md"></input>
                <p className="mx-2">Divided into columns</p>
                <input
                    type="number"
                    min="1"
                    value={numberColumns}
                    onChange={(e) => setNumberColumns(e.target.value)}
                    className="text-center w-12 p-1 border border-gray-600 rounded-md"></input>
            </div>
            <div className="mt-2 flex items-center">
            <p className="mr-2">Insert space at column</p>
                <input  type="number" value={groupGapOne} onChange={(e) => setGroupGapOne(e.target.value)} className="text-center w-12 p-1 border border-gray-600 rounded-md"></input>
                <p className="mx-2">Insert space at column</p>
                <input  type="number" value={groupGapTwo} onChange={(e) => setGroupGapTwo(e.target.value)} className="text-center w-12 p-1 border border-gray-600 rounded-md"></input>

            </div>
        </div>
    )
}

export default UserInputForm;