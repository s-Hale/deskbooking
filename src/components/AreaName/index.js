
import React, {useState} from 'react';
import styled from 'styled-components';

const StyledSave = styled.button`
   :hover {
       text-shadow: 0 0 20px #1b3447;
   }
`;

const AreaName = ({areaName, setAreaName}) => {
    const [showInput, setShowInput] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowInput(false)
    };

    const handleEdit = (e) => {
        e.preventDefault()
        setShowInput(true)
    };



    return (
        <div className="mt-2 flex items-center w-full justify-between">
            <div className="flex items-center">
            <label className="text-gray-500 font-bold text-lg mr-3 my-2.5">Area name:</label>
            {!showInput && <h2 className="text-cyan-800 font-bold text-xl">{areaName}</h2>}
            <form onSubmit = {handleSubmit}>
                {showInput && <input onChange={(e) => setAreaName(e.target.value)} value={areaName} className="ml-2 w-60 h-12 p-2 text-lg border border-gray-500 rounded-xl"></input>}
                {showInput && <StyledSave type='submit' className="ml-2 p-1.5 font-bold text-cyan-900" >save</StyledSave>}
                {!showInput && <button onClick={handleEdit} className="ml-8 p-1"> <i class="fa fa-pencil" style={{fontSize:'24px', color:'#1b3447'}}></i></button>}
            </form>
            </div>

            <div className="flex items-center">
                <button className="py-1 px-3 rounded-md border-2 border-cyan-600 border-opacity-90 bg-cyan-600 bg-opacity-90 text-white w-24 font-bold hover:bg-cyan-800">Save</button>
                <button className="ml-2 py-1 px-3 rounded-md border-2 border-cyan-700 text-cyan-700 w-24 font-bold hover:bg-cyan-50">Cancel</button>
            </div>


        </div>
    )
}

export default AreaName;