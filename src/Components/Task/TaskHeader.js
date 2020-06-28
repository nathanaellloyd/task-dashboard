import React from 'react';

const TaskHeader = ({taskHeader, percentage}) => {
  
    console.log(percentage); 
    
    return (
            <div className="task-header">
                <h1>{taskHeader}:</h1>
                { percentage === 100
                    ?  <h1>COMPLETE</h1> : <h1>IN PROGRESS</h1>
                }
            </div>

        );
    };

export default TaskHeader; 