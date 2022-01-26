
import React from 'react';
import styled from 'styled-components';

const NoArrowInput = styled.input`
::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
}
::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
}
`;

const UserInputForm = (
    { numberHeight,
        setNumberHeight,
        numberColumns,
        setNumberColumns,
        groupGapOne,
        setGroupGapOne,
        groupGapTwo,
        setGroupGapTwo }) => {
    const inputPairStyling = "flex justify-between items-center w-2/5"
    return (
        <div className="flex flex-col p-2 w-2/5 border border-gray-300 rounded-md">

            <div className="flex justify-between items-center">
                <div className={inputPairStyling}>
                    <p>Number of Desks</p>
                <NoArrowInput
                    type="number"
                    value={numberHeight}
                    min="2"
                    onChange={(e) => setNumberHeight(e.target.value)}
                    className="text-center w-14 p-1 border border-cyan-800 rounded-md">
                    </NoArrowInput>
                </div>
                <div className={inputPairStyling}>
                    <p>Divided into columns</p>
                <NoArrowInput
                    type="number"
                    min="1"
                    value={numberColumns}
                    onChange={(e) => setNumberColumns(e.target.value)}
                    className="text-center w-14 p-1 border border-cyan-800 rounded-md">
                    </NoArrowInput>
                </div>
            </div>

            <div className="mt-2 justify-between flex items-center">
                <div className={inputPairStyling}>
                    <p>Insert space at column</p>
                    <NoArrowInput type="number" value={groupGapOne} onChange={(e) => setGroupGapOne(e.target.value)} className="text-center w-14 p-1 border border-cyan-800 rounded-md">
                    </NoArrowInput>
                </div>
                <div className={inputPairStyling}>
                    <p>Insert space at column</p>
                    <NoArrowInput type="number" value={groupGapTwo} onChange={(e) => setGroupGapTwo(e.target.value)} className="text-center w-14 p-1 border border-cyan-800 rounded-md">
                    </NoArrowInput>
                </div>
            </div>
        </div>
    )
}

export default UserInputForm;