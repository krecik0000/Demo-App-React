import React from 'react';
import './documentBlock.css';
import { FcDocument } from 'react-icons/fc';
import { FaTrash } from 'react-icons/fa';



function documentBlock(props) {
    const docName = "Document";
    return (
        <div className='docCell'>
            <div className='docIcon'>
                <FcDocument/>
            </div>
            <div className='docBottom'>
                <div className='docTitle'>
                    <div className='docName'>
                        {docName}
                    </div>
                    <div className='docDate'>
                        {props.data}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default documentBlock;
