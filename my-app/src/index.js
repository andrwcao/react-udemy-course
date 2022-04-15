// Import react & react dom
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './comment';
import ApprovalCard from './ApprovalCard';

// Create react component
const App = function() {
    const buttonText = "Click me";

    return (        
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    content="nice blog post"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00AM" 
                    content="I like the subject"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    content="I like the writing"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
}

// Render react component on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);