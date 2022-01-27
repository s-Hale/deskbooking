
import React, { useState } from 'react';
import UserInputForm from '../UserInputForm/'
import AreaName from '../AreaName'
import styled from 'styled-components';
import {Link} from "react-router-dom";


const DeskMap = () => {
    const [numberDesks, setNumberDesks] = useState(24);
    const [numberColumns, setNumberColumns] = useState(8);
    const [groupGapOne, setGroupGapOne] = useState(2);
    const [groupGapTwo, setGroupGapTwo] = useState(6);
    const [groupGapThree, setGroupGapThree] = useState();
    const [groupGapFour, setGroupGapFour] = useState();
    const [chosenDesk, setChosenDesk] = useState();
    const [summaryPhrase, setSummaryPhrase] = useState('');
    const [areaName, setAreaName] = useState('')

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
        setSummaryPhrase(`You have selected desk ${e.target.value}.`)
    }

    const desks = Array.from({ length: numberDesks }, (_, i) => i)
    const occupied = [7, 18, 22];

    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="flex flex-col w-3/5 mt-28">
              <h2 className="mb-4 font-bold text-4xl text-gray-700">Set up an area</h2>
                <div className="w-full border-t-2 border-gray-300"></div>
            </div>
            <div className="flex w-3/5">
                <AreaName areaName={areaName} setAreaName={setAreaName}></AreaName>
            </div>
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
                        disabled={occupied.includes(seat)}
                        onClick={(e) => handleDeskSelection(e)}
                        className={`${occupied.includes(seat) ?
                            'bg-gray-200 cursor-not-allowed text-gray-500 text-opacity-60' :
                            'hover:bg-cyan-600 hover:scale-105 bg-cyan-600 bg-opacity-20 cursor-pointer border-gray-400 border-opacity-80 text-gray-800'}
                            w-24 h-12 border rounded-md text-xs flex items-center justify-center`}>
                            {seat}
                    </button>
                </span>
             ))}
            </StyledDesks>
            <UserInputForm
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
            />
            <span className="mt-2 text-lg">{summaryPhrase}</span>
            <Link to="/" className="font-bold text-lg text-cyan-800">Back to selection</Link>
        </div>
    )
}

export default DeskMap;