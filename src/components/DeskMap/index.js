
import React, { useState } from 'react';
import UserInputForm from '../UserInputForm/'
import UserBookingFields from '../UserBookingFields'
import AreaName from '../AreaName'
import styled from 'styled-components';
import {Link} from "react-router-dom";


const DeskMap = ({incomingAreaName, mockData, fixedView, setLoading, setBookingDetails}) => {
    const [numberDesks, setNumberDesks] = useState(24);
    const [numberColumns, setNumberColumns] = useState(mockData?.numberColumns || 8);
    const [groupGapOne, setGroupGapOne] = useState(mockData?.groupGapOne || 2);
    const [groupGapTwo, setGroupGapTwo] = useState(mockData?.groupGapTwo || 6);
    const [groupGapThree, setGroupGapThree] = useState(mockData?.groupGapThree || 0);
    const [groupGapFour, setGroupGapFour] = useState(mockData?.groupGapFour || 0);
    const [chosenDesk, setChosenDesk] = useState();
    const [areaName, setAreaName] = useState('');

    const StyledDesks = styled.div`
     & > span:nth-of-type(${numberColumns}n + ${groupGapOne}) {
        margin-right: 26px
     }
     & > span:nth-of-type(${numberColumns}n + ${groupGapTwo}) {
        margin-right: 26px
     }
     & > span:nth-of-type(${numberColumns}n + ${groupGapThree}) {
        margin-right: 26px
     }
     & > span:nth-of-type(${numberColumns}n + ${groupGapFour}) {
        margin-right: 26px
     }

     grid-template-columns: repeat(${numberColumns}, min-content);
    `;

    const handleDeskSelection = (e) => {
            setChosenDesk(e.target.value)
            // setSummaryPhrase(`You have selected desk ${e.target.value}.`)
    }

    const desks = mockData?.desks || Array.from({ length: numberDesks }, (_, i) => i)
    const occupied = mockData?.occupied;

    return (
        <div className="min-h-screen flex flex-col items-center">
             {!fixedView && (<div className="flex flex-col w-3/5 mt-20">
                        <h2 className="mb-4 font-bold text-4xl text-gray-700">Set up an area</h2>
                        <div className="w-full border-t-2 border-gray-300"></div>
            </div>
                )}
            {!fixedView ? <div className="flex w-3/5">
                <AreaName areaName={areaName} setAreaName={setAreaName}></AreaName>
            </div> : <h2 className="text-cyan-800 font-bold text-xl">{incomingAreaName}</h2>}


            <StyledDesks className="justify-center mb-2 mt-2 desks grid rounded-md p-2 border border-gray-300">
                {desks.map(seat => (
                  <span
                    key={seat}
                    className={Number(chosenDesk) === seat ?
                      'bg-cyan-600 m-1 rounded-md' :
                      'm-1 rounded-md'}
                    >
                    <button
                        value={seat}
                        disabled={occupied?.includes(seat)||!fixedView}
                        onClick={(e) => handleDeskSelection(e)}
                        className={`${occupied?.includes(seat) ?
                            'bg-gray-200 cursor-not-allowed text-gray-500 text-opacity-60' :
                            `${fixedView && 'hover:bg-cyan-600 hover:scale-105 cursor-pointer'} bg-blue-300 bg-opacity-20 border-gray-400 border-opacity-80 text-gray-800`}
                            w-24 h-12 border rounded-md text-xs flex items-center justify-center`}>
                            {seat}
                    </button>
                </span>
             ))}
            </StyledDesks>
            {!fixedView ? <UserInputForm
                numberDesks={numberDesks}
                numberColumns={numberColumns}
                groupGapOne={groupGapOne}
                groupGapTwo={groupGapTwo}
                groupGapThree={groupGapThree}
                groupGapFour={groupGapFour}
                setNumberDesks={setNumberDesks}
                setNumberColumns={setNumberColumns}
                setGroupGapOne={setGroupGapOne}
                setGroupGapTwo={setGroupGapTwo}
                setGroupGapThree={setGroupGapThree}
                setGroupGapFour={setGroupGapFour}
            /> : <UserBookingFields chosenDesk={chosenDesk} setLoading={setLoading} setBookingDetails={setBookingDetails}/>}
            <Link to="/" className="font-bold text-lg text-cyan-800 mt-4">Back to selection</Link>
        </div>
    )
}

export default DeskMap;