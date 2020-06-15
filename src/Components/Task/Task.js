import React, { Component } from 'react';
import TaskCard from './TaskCard';
import TaskHeader from './TaskHeader'; 

class Task extends Component {
    state = {
        tasks: [

        {
                "name": "ACTIVITY 01",
                "tasks": [
                    {
                    "name": "The first task",
                    "description": "A short description",
                    "date": "2020-05-07T12:00:00.000Z",
                    "isComplete": true
                    },
                    {
                    "name": "The second task",
                    "description": "This description is going to be really long and will most likely spread across many lines. Unlike the title it is important that the whole description is readable so using an ellipsis is not possible. ",
                    "date": "2020-05-07T14:00:00.000Z",
                    "isComplete": true
                    },
                    {
                    "name": "The third task has a much longer name",
                    "description": "Specific details of the stage taken action to finish the task",
                    "date": "2020-05-07T16:00:00.000Z",
                    "isComplete": false
                    },
                    {
                    "name": "The fourth task has an even longer name so you should use an ellipsis to clamp it",
                    "description": "This is another short description",
                    "date": "2020-05-08T10:00:00.000Z",
                    "isComplete": false
                    },
                    {
                    "name": "The fifth task",
                    "description": "This is another long description but not as long as the other description. This is just some more text padding",
                    "date": "2020-05-08T12:00:00.000Z",
                    "isComplete": false
                    }
                ]
            }
        ]
    }

    render () {

    const taskHeader = (
            this.state.tasks.map((task) => {
                return (
    
                    <TaskHeader
                     taskHeader={task.name}
                    />
                );             
            })
     ); 

     const tasks = (
        this.state.tasks[0].tasks.map((task) => {
            return (

                <TaskCard
                    name={task.name}
                    description={task.description}
                    date={task.date}
                />
            );             
        })
 ); 
            
        return (
            
            <>
                <div>
                    {taskHeader}
                </div>

                <div>
                    {tasks}
                </div>
            </>

        ); 
    }; 
}

export default Task; 