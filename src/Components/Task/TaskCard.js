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

    // const trueTick = true; 
    // const falseTick = false; 

    // this.state.tasks[0].tasks.map((task) => {
    
    //      task.isComplete === true ? trueTick : falseTick; })


    // console.log(isComplete)

    // const trueTick = () => {
    //     if (isComplete = true )
    // }

    // if (isComplete) {
    //      let tickIcon = <img src={boldtick} alt='boldtick'/>
    //   } else {
    //      let tickIcon = <img src={emptytick} alt='emptytick'/>
    //   }


    
    return (
        
        <>
            <div className="task-card">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{newDate}</p>
                <p>{isComplete.toString()}</p>

                { isComplete
                    ?  <img src={boldtick} alt='boldtick'/>
                        : 
                        <img src={emptytick} alt='emptytick'/>
                }

            </div>
            
        </>
        );
    };

export default TaskCard; 