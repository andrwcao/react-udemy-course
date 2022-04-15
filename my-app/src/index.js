// Import react & react dom
import React from 'react';
import ReactDOM from 'react-dom';

// Create react component
const App = function() {
    const buttonText = "Click me";

    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText}
            </button>
        </div>
    );
}

// Render react component on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);