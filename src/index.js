import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Trash from './Components/trashPage/trashPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function Routing(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recycleBin" element={<Trash />} />
        <Route element={() => "error"} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
