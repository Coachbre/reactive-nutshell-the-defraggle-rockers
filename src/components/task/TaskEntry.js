//author: Bre Coach
// task entry form and submission button to create a new task

import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import { addTask } from '../../modules/TaskManager';
import "./TaskCard.css"


export const TaskEntry = () => {

    const [task, setTask] = useState({
        /*defines initial state of 'task'
        isComplete is automatically set to false */
        name: "",
        dueDate: "",
        isComplete: false
    });

    const [isLoading, setIsLoading] = useState(false);
    

    const history= useHistory();

    const handleInputChange = (event) => {
        const newTask = { ...task }
        //creates a copy before changing
        let selectedVal = event.target.value
        //selectedVal is the user input
        if (event.target.id.includes("Id"))
        //forms always return values back as strings
         {
            selectedVal = parseInt(selectedVal)
              //parseInt() turns selectedVal (id) back into a number
        }

        newTask[event.target.id] = selectedVal
        //set value for the new task (i.e. name) equal to the user input
        setTask(newTask)
        //updates state
      
    }

    const handleClickSaveTask = () => {
        addTask(task)
            .then(() => history.push("/tasks/"))
             /*invoke addTask from TaskManager.js passing 'task' as argument, then 
             go back to task list page */
    }

    return (
        <form className="taskForm">
            <h2 className="taskForm_title"> Whats Up Next?</h2>
            <div className="form-group">
            <fieldset>
                
                    <label htmlFor="name">Task:</label>
                    <input type="text" id="name" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Task" value={task.name} />
             
            </fieldset>

            <fieldset>
               
                    <label htmlFor="dueDate">Complete by:</label>
                    <input type="date" id="dueDate" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Date" value={task.dueDate} />
             
            </fieldset>
           
            <div>
            <Link to={`/tasks`} >
            <button className="cancel-task">Cancel</button>
            </Link>
            </div>
            
            <Link to={`/tasks`} >
            <button className="task-save" onClick={handleClickSaveTask} >
                Save Task
            </button>
            </Link>
            </div>
            
        </form>
    )
};
