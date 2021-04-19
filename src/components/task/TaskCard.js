//author: Bre Coach
// shows individual task info along with delete and edit options

import React from 'react'
import { Link } from 'react-router-dom'
import "./Task.css"




export const TaskCard = ({task, handleDelete, handleHideTask}) => (
    //'task, handleDelete, handleHideTask' are props being passed in from TaskList() return

    <section className="task">
      
        <li><h2 className="task_name">{task.name}</h2>
 
        <h3 className="task_dueDate">Complete by: {task.dueDate}</h3>

        <div>   
            <label>Complete</label>
            <input type="checkbox" id="checkbox" onChange={() => handleHideTask(task)}/>
            
        </div>

        <div>
        <Link to={`/tasks/edit/${task.id}`}>
            {/* sets the URL to match the specific task id # */}
        <button type="button" className="btn-primary">Edit Task</button>
        </Link>
        </div>

        <div>
        <button type="button" className="btn-primary" onClick={() => handleDelete(task.id)}>Delete Task</button>
        </div>
        </li>
        
    </section> //why is onClick formatted like this? ^
)

