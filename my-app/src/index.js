// Import react & react dom
import React from 'react';
import ReactDOM from 'react-dom';

// Create react component
const App = function() {
    return (
        <div>Hi there!</div>
    );
}

// Render react component on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);