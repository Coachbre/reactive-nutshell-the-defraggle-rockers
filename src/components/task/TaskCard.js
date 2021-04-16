import React from 'react'
import "./Task.css"




export const TaskCard = ({task, handleDelete, handleHideTask}) => (
    //'task' is prop thats equal to each taskObj in array- being passed in from TaskList() return
    //will need to add isComplete boolean 
    <section className="task">
        <h2 className="task_name">Task: {task.name}</h2>
 
        <div className="task_dueDate">Complete by: {task.dueDate}</div>

        <div>   
            <label></label><input type="checkbox" id="checkbox" onChange={() => handleHideTask(task)}> 
                        
            </input> 
            <br></br>
        </div>

        <button type="button" onClick={() => handleDelete(task.id)}>Remove Task</button>
    </section> //why is onClick formatted like this? ^
)

