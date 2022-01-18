import React from 'react';
import './App.css';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Document from './Components/documentBlock/documentBlock';
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
      Tlist: []
    };
  }

  //incorporating local storage 
  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);
        let date = localStorage.getItem(key);
        // parse the localStorage string and setState
        try {
          date = JSON.parse(date);
          this.setState({ [key]: date});
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: date});
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
      date: moment().utcOffset('+01:00').format('DD-MM-YYYY')
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list
    this.setState({
      list,
      newItem: ""
    });
  }

  moveItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList});

  }
  
  render() {
    return (
      <>
      <div className='mainView'>

        <nav className="navBar">
          <div className="leftSideNav">
              <h2>Documents</h2>
          </div>
          <div className='rightSideNav'>
            <AiFillPlusCircle className='plusUpNav' onClick={() => this.addItem()}/>
            <Link to="/recycleBin" className='trashUpNav'>
              <FaTrash className='trashUpNav'/>
            </Link>
          </div> 
        </nav>
        
        <div className="documentGrid">
        <div className='gridCellBlock'>
          <ul className='gridCellBlockSingle'>
            {this.state.list.map(item => {
              return (
                <li key={item.id} className='docButton'>
                  <Document data={item.date} />
                  <FaTrash className='docTrashIcon' onClick={() => this.moveItem(item.id)}/>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      </div>
      </>
    );
  }
}

export default App;
