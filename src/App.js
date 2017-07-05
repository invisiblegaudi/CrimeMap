import React, { Component } from 'react';
import './App.css';
import CrimeMap from './components/CrimeMap/CrimeMap.js';

class App extends Component {
    
    render() {
	return (
	    <div className="App">
            <h2>Crime Map</h2>
	    <CrimeMap />
	    </div>
	);
    }
}

export default App;
