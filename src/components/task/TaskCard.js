import React from 'react'
import { Link } from "react-router-dom"
//^ will be needed for check box?
import "./Task.css"
import { deleteTask } from '../../modules/TaskManager';


export const TaskCard = ({task, handleDelete}) => (
    //'task' is prop thats equal to each taskObj in array- being passed in from TaskList() return
    //will need to add isComplete boolean 
    <section className="task">
        <h2 className="task_name">Task: {task.name}</h2>
        <h3 className="task_description">Description: {task.description}</h3>
        <div className="task_dueDate">Due date: {task.dueDate}</div>
        <button type="button" onClick={() => handleDelete(task.id)}>Remove Task</button>
    </section> //why is onClick formatted like this ^
)

