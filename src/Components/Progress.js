import React, { useState } from 'react'; 

const Progress = ({percentage}) => {
	const [style, setStyle] = useState({});

	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${percentage}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
        <>
            <h2>Progress: ({percentage}%)</h2>
            <div className="progress">
			<div className="progress-done" style={style}>
				
			</div>
		    </div>
        </>
	)
}

export default Progress; 
