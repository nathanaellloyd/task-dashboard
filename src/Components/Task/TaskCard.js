import React, { Component } from 'react';

class TaskCard extends Component {
    
    render() {

    return (
        <>
            <div className="task-header">
                <h1>{this.props.taskHeader}</h1>
            </div>
            <div className="task-card">
                <h2>{this.props.name}</h2>
                <p>{this.props.description}</p>
                <p>{this.props.date}</p>
                <p>{this.props.isComplete}</p>
            </div>
        </>
        );
    };
}
export default TaskCard; 