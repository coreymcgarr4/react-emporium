import React, {Component} from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar.js';
import {browserHistory} from 'react-router';

export class App extends Component {
  render(){
    return (
      <div className='app'>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}
