import React, { Component } from 'react';
import './App.css';
import GoogleMap from './components/GoogleMap/GoogleMap.js'

class App extends Component {
    
    render() {
	return (
	    <div className="App">
            <h2>Crime Map</h2>
	    <GoogleMap />
	    </div>
	);
    }
}

export default App;
