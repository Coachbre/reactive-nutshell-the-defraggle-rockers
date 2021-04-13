import React from 'react'
import { Link } from "react-router-dom"
//^ will be needed for check box?
import "./Task.css"

export const TaskCard = (task) => (
    //will need to add isComplete boolean 
    <section className="task">
        <h2 className="task_name">Task Name..{task.name}</h2>
        <h3 className="task_description">task decription..{task.description}</h3>
        <div className="task_dueDate">Due date: {task.dueDate}</div>
        <div>Task completion</div>
    </section>
)