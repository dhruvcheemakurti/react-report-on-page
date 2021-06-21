import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './rbclogo.png';


const Button = styled.button`
  background-color: #d9d9d9;
  color: black;
  padding: 5px 15px;
  border-radius: 0px;
  outline: 0;
  cursor: pointer;
  &:hover {
    background-color: #1a75ff; 
  }`
function clickMe(){
  alert('View Results does not work yet!');
}
const styles={
  reportToolTitle:{
    fontFamily: 'Open Sans',
    color: 'rgba(4, 48, 125)',
    fontSize: '30'
  }
}
document.body.style = 'background: #f2f2f2;';

function App() {
  return (
    <div className="App">
      <Navbar bg="light">
        <Navbar.Brand href="#home">
            <img
            alt="logo"
            src={logo}
            width="100"
            height="40"
            className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
      </Navbar>
      <div className="headerComponent"> 
        <h3 className="container p-5" style={styles.reportToolTitle} > Report Tool </h3>
      </div>
      <h5 className="container p-5"> Complete fields below to view report</h5>
      <div className="container p-5">
        <h6 className="Type"> Type </h6>
        <select className="custom-select">
          <option value= ""> </option>
          <option value= "1"> Strategy </option>
          <option value= "2"> Composite </option>
          <option value= "3"> Account </option>
        </select>
      </div>
      <div className="container p-5">
        <h6 className="Search"> Search Name / Eagle ID / Global ID </h6>
        <form>
          <input
            type="text"
          />
      </form>
      </div> 
      <div className="container p-5"> 
        <h6 className="Effective Date"> Effective Date</h6>
        <Calendar />
      </div>
      <div className="container p-5">
        <Button onClick={clickMe}> View Results </Button>
      </div> 
    </div>
  ); 
}
export default App;
