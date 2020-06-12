import React from 'react';

const TaskCard = ({name, description, date}) => {
    
    const oldDate = date; 

    const formatDate = (string) => {
        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', weekday: 'long'  };
        return new Date(string).toLocaleDateString("en-US",options);
    }

    const newDate = formatDate(oldDate);
    
    return (
        
        <>
            <div className="task-card">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{newDate}</p>
            </div>
        </>
        );
    };

export default TaskCard; 