
import React, { useState } from 'react';
import UserInputForm from '../UserInputForm/'
import styled from 'styled-components';



const DeskMap = () => {
    const [numberHeight, setNumberHeight] = useState(24);
    const [numberColumns, setNumberColumns] = useState(8);
    const [groupGapOne, setGroupGapOne] = useState(2);
    const [groupGapTwo, setGroupGapTwo] = useState(6);
    const [chosenDesk, setChosenDesk] = useState();
    const [summaryPhrase, setSummaryPhrase] = useState('');

    const StyledDesks = styled.div`
     & > span:nth-of-type(${numberColumns}n + ${groupGapOne}) {
        margin-right: 24px
     }
     & > span:nth-of-type(${numberColumns}n + ${groupGapTwo}) {
        margin-right: 24px
     }
     grid-template-columns: repeat(${numberColumns}, min-content);
    `;

    const handleDeskSelection = (e) => {
        setChosenDesk(e.target.value)
        setSummaryPhrase(`You have selected desk ${e.target.value}.`)
    }


    const desks = Array.from({ length: numberHeight }, (_, i) => i)
    return (
        <>
            <StyledDesks className="mt-16 desks grid rounded-md p-2">
            {desks.map(seat =>  (
              <span
                tabIndex="0"
                key={seat}
                className={Number(chosenDesk) === seat ? 'bg-cyan-600 m-1 rounded-md' : 'bg-blue-50 m-1 rounded-md'}
                >
                    <button
                        value={seat}
                        onClick={(e) => handleDeskSelection(e)}
                        className="w-24 h-12 border border-cyan-900 rounded-md hover:bg-cyan-600 cursor-pointer text-xs text-gray-800 flex items-center justify-center">{seat}</button>
                </span>
             )
                )}



            </StyledDesks>
            <UserInputForm
                numberHeight={numberHeight}
                numberColumns={numberColumns}
                groupGapOne={groupGapOne}
                groupGapTwo={groupGapTwo}
                setNumberHeight={setNumberHeight}
                setNumberColumns={setNumberColumns}
                setGroupGapOne={setGroupGapOne}
                setGroupGapTwo={setGroupGapTwo}
            />
            <span className="mt-2 text-lg">{summaryPhrase}</span>
        </>
    )
}

export default DeskMap;