
import React, {useState} from 'react';
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

const UserInputForm = ({
        numberDesks,
        setNumberDesks,
        numberColumns,
        setNumberColumns,
        groupGapOne,
        setGroupGapOne,
        groupGapTwo,
        setGroupGapTwo,
        groupGapThree,
        setGroupGapThree,
        groupGapFour,
        setGroupGapFour,
    }) => {
    const [extraColumns, setExtraColumns] = useState(false);
    const inputPairStyling = "flex justify-between items-center w-2/5"

    return (
        <div className="flex flex-col p-2 w-2/5 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center">
                <div className={inputPairStyling}>
                    <p className="font-bold text-cyan-800">Number of Desks</p>
                      <NoArrowInput
                      type="number"
                      value={numberDesks}
                      min="2"
                      max="75"
                      onChange={(e) => setNumberDesks(e.target.value)}
                      className="text-center w-14 p-1 border border-cyan-800 rounded-md">
                    </NoArrowInput>
                </div>
                <div className={inputPairStyling}>
                    <p className="font-bold text-cyan-800">Divided into columns</p>
                      <NoArrowInput
                       type="number"
                       min="1"
                       max="10"
                       value={numberColumns}
                       onChange={(e) => setNumberColumns(e.target.value)}
                       className="text-center w-14 p-1 border border-cyan-800 rounded-md">
                     </NoArrowInput>
                </div>
            </div>
            <div className="mt-2 justify-between flex items-center">
                <div className={inputPairStyling}>
                    <p className="font-bold text-cyan-800">Insert space at column</p>
                    <NoArrowInput
                        type="number"
                        value={groupGapOne}
                        onChange={(e) => setGroupGapOne(e.target.value)}
                        className="text-center w-14 p-1 border border-cyan-800 rounded-md">
                    </NoArrowInput>
                </div>
                <div className={inputPairStyling}>
                    <p className="font-bold text-cyan-800">Insert space at column</p>
                    <NoArrowInput
                        type="number"
                        value={groupGapTwo}
                        onChange={(e) => setGroupGapTwo(e.target.value)}
                        className="text-center w-14 p-1 border border-cyan-800 rounded-md">
                    </NoArrowInput>
                </div>
            </div>

            <div className="flex p-1 justify-center">
                <button onClick={() => setExtraColumns(!extraColumns)} className="font-bold text-cyan-700 mt-2 py-2 px-3 bg-blue-50 rounded-xl hover:bg-blue-100 w-auto">{extraColumns ? 'Hide' : 'Additional spacing'}</button>
            </div>

            {extraColumns && (
                <div className="mt-2 justify-between flex items-center">
                    <div className={inputPairStyling}>
                        <p className="font-bold text-cyan-800">Insert space at column</p>
                        <NoArrowInput
                            type="number"
                            value={groupGapThree}
                            onChange={(e) => setGroupGapThree(e.target.value)}
                            className="text-center w-14 p-1 border border-cyan-800 rounded-md">
                        </NoArrowInput>
                    </div>
                <div className={inputPairStyling}>
                    <p className="font-bold text-cyan-800">Insert space at column</p>
                        <NoArrowInput
                            type="number"
                            value={groupGapFour}
                            onChange={(e) => setGroupGapFour(e.target.value)}
                            className="text-center w-14 p-1 border border-cyan-800 rounded-md">
                        </NoArrowInput>
                </div>
            </div>)}
        </div>
    )
}

export default UserInputForm;