import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import Document from '../documentBlock/documentBlock';
function Trashpage(props) {
    

    return (
        <div className='mainView'>

            <nav className="navBar">
                <div className="leftSideNav">
                    <h2>Recycle Bin</h2>
                </div>
                <div className='rightSideNav'>
                    <Link to="/" className='trashUpNav'>
                        <AiFillHome className='trashUpNav'/>
                    </Link>
                </div> 
            </nav>
            
            <div className="documentGrid">
                <div className='gridCellBlock'>
                    <ul className='gridCellBlockSingle'>
                        {/* {this.state.list.map(item => {
                        return (
                            <li key={item.id} className='docButton'>
                            <Document data={item.date} />
                            <FaTrash className='docTrashIcon' onClick={() => this.deleteItem(item.id)}/>
                            </li>
                        );
                        })} */}
                    </ul>
                </div>
                <div className='deleteFiles'>
                   <FaTrash className='deleteFilesIcon'/>
                </div>
            </div>
        </div>
    )
}

export default Trashpage;
