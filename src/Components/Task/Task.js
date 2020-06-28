import React, { Component } from 'react';
import TaskCard from './TaskCard';
import TaskHeader from './TaskHeader'; 
import Progress from '../Progress'; 

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
                    "isComplete": true
                    },
                    {
                    "name": "The fourth task has an even longer name so you should use an ellipsis to clamp it",
                    "description": "This is another short description",
                    "date": "2020-05-08T10:00:00.000Z",
                    "isComplete": true
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


     const tasks = (
        this.state.tasks[0].tasks.map((task) => {
            return (

                <TaskCard
                    key={task.name}
                    name={task.name}
                    description={task.description}
                    date={task.date}
                    isComplete={task.isComplete}
                />
            );             
        })
    ); 


    const total = this.state.tasks[0].tasks.length;
    const completed = this.state.tasks[0].tasks.filter(t => t.isComplete).length;
    const percentage = (completed/total) * 100;

    const taskHeader = (
        this.state.tasks.map((task) => {
            return (

                <TaskHeader
                    key={task.name} 
                    taskHeader={task.name} 
                    percentage={percentage}                    />
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
                <div>
                    <Progress percentage={percentage} />    
                </div> 
            </>

        ); 
    }; 
}

export default Task; 