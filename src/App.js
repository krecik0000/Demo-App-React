import React from 'react';
import './App.css';
import { AiFillPlusCircle } from 'react-icons/ai';
import Document from './Components/documentBlock/documentBlock';
// import {renderDoc} from './Components/mainPage/mainPage';
import { FaTrash, FaUserInjured } from 'react-icons/fa';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const Block = () => {
  return <Document/>;
};


function App(props) {
  const [blockList, setBlockList] = useState([]);

  const onAddBtnClick = event => {
    console.log(blockList.length);
    setBlockList(blockList.concat(<Document key={blockList.length} />));
  };

  return (
    <div className='mainView'>
      <nav className='navBar'>
        <div className="leftSideNav">
            <h2>Documents</h2>
        </div>
        <div className='rightSideNav'>
          <AiFillPlusCircle className='plusUpNav' onClick={onAddBtnClick}/>
          <Link to="/Trash" className='trashUpNav'>
            <FaTrash/>
          </Link>
        </div>
      </nav>
      <section className='documentGrid'>
        <div className='gridCellBlock'>
        {generateBlocks}
        </div>
      </section>
    </div>
  )
}



export default App;
