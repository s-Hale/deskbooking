
import React, { useState } from 'react';
import UserInputForm from '../UserInputForm/'
import styled from 'styled-components';



const DeskMap = () => {
    const [numberHeight, setNumberHeight] = useState(5);
    const [numberColumns, setNumberColumns] = useState(8);
    const [groupGapOne, setGroupGapOne] = useState(2);
    const [groupGapTwo, setGroupGapTwo] = useState(6)

    const StyledDesks = styled.div`
     & > span:nth-of-type(${numberColumns}n + ${groupGapOne}) {
        margin-right: 24px
     }
     & > span:nth-of-type(${numberColumns}n + ${groupGapTwo}) {
        margin-right: 24px
     }
    `;



    const desks = Array.from({ length: numberHeight }, (_, i) => i)
    return (
        <>
            <StyledDesks style={{'grid-template-columns': 'repeat(' + numberColumns + ', min-content)'}} className="mt-16 desks bg-white grid rounded-md p-2">
            {desks.map(seat =>  (
              <span
                tabIndex="0"
                key={seat}
                className="m-1 desk w-24 h-12 border border-gray-600 rounded-md hover:bg-blue-500 cursor-pointer text-xs text-gray-800 flex items-center justify-center"
              >{seat}</span>
             )
           )}
            </StyledDesks>
            <UserInputForm
                setNumberHeight={setNumberHeight}
                setNumberColumns={setNumberColumns}
                setGroupGapOne={setGroupGapOne}
                setGroupGapTwo={setGroupGapTwo}
            />
        </>
    )
}

export default DeskMap;