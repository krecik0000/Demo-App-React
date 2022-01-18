import React from 'react';
import './documentBlock.css';
import { FcDocument } from 'react-icons/fc';
import { FaTrash } from 'react-icons/fa';
import moment from "moment";


function documentBlock(props) {
    let date = moment().utcOffset('+01:00').format('DD-MM-YYYY');
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
                        {date}
                    </div>
                </div>
                <div className='docButton'>
                    <FaTrash className='docTrashIcon'/>
                </div>
            </div>
        </div>
    )
}

export default documentBlock;
