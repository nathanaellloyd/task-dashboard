import React from 'react';
import boldtick from '../../Icons/boldtick.png'; 
import emptytick from '../../Icons/emptytick.png'; 

const TaskCard = ({name, description, date, isComplete}) => {
    
    const oldDate = date; 

    const formatDate = (string) => {
        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', weekday: 'long'  };
        return new Date(string).toLocaleDateString("en-US",options).replace(/[,\s]/," |");
    }

    const newDate = formatDate(oldDate);

    return (
        
        <>
            <div className="task-card">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{newDate}</p>
                { isComplete
                    ?  <img src={boldtick} alt='boldtick' class='bold-tick'/> : <img src={emptytick} alt='emptytick' class='empty-tick'/>
                }

            </div>
            
        </>
        );
    };

export default TaskCard; 