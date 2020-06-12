import React from 'react';

const TaskHeader = ({taskHeader}) => {
    
    return (
            <div className="task-header">
                <h1>{taskHeader}:</h1>
            </div>

        );
    };

export default TaskHeader; 