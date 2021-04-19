import React from 'react'
import { Link } from 'react-router-dom'
import "./Task.css"




export const TaskCard = ({task, handleDelete, handleHideTask, handleEditTask}) => (
    //'task, handleDelete, handleHideTask, handleEditTask' are props being passed in from TaskList() return

    <section className="task">
        <h2 className="task_name">{task.name}</h2>
 
        <h3 className="task_dueDate">Complete by: {task.dueDate}</h3>

        <div>   
            <label>Complete</label>
            <input type="checkbox" id="checkbox" onChange={() => handleHideTask(task)}/>
            <br></br>
        </div>

        <Link to={`/tasks/edit`}>
        <button type="button">Edit Task</button>
        </Link>

        <button type="button" onClick={() => handleDelete(task.id)}>Delete Task</button>
    </section> //why is onClick formatted like this? ^
)

