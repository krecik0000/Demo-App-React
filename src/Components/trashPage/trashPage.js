import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
function Trashpage(props) {
    

    return (
        <div className='mainView'>
            <nav className='navBar'>
                <div className="leftSideNav">
                    <h2>Trash</h2>
                </div>
                <div className='rightSideNav'>
                <Link to="/" className='trashUpNav'>
                    <AiFillHome/>
                </Link>
                </div>
            </nav>
            <section className='documentGrid'>
                <div className='gridCellBlock'>
                {/* {blockList} */}
                </div>
            </section>
        </div>
    )
}

export default Trashpage;
