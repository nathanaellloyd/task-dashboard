import React, { Component } from 'react';

const TaskCard = ({}) => {

    // let oldDate = this.props.date; 
    // let formatDate = formatDate(oldDate);

    // formatDate = (string) => {
    //     let options = { year: 'numeric', month: 'long', day: 'numeric' };
    //     return new Date(string).toLocaleDateString([],options);
    // }
    
    return (
        
        <>
            <div className="task-header">
                <h1>{this.props.taskHeader}</h1>
            </div>
            <div className="task-card">
                <h2>{this.props.name}</h2>
                <p>{this.props.description}</p>
                <p>{this.props.date}</p>
            </div>
        </>
        );
    };

export default TaskCard; 