import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addTask } from '../../modules/TaskManager';


export const TaskEntry = () => {

    const [task, setTask] = useState({
        //defines initial state of 'task'
        name: "",
        dueDate: "",
    });

    // ***** const [isLoading, setIsLoading] = useState(false); *****

    const history= useHistory();

    const handleControlledInputChange = (event) => {
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

    const handleClickSaveTask = (event) => {
        addTask(task)
            .then(() => history.push("/tasks/"))
             /*invoke addTask from TaskManager.js passing 'task' as argument, then 
             go back to task list page */
    }

    return (
        <form className="taskForm">
            <h2 className="taskForm_title"> Whats Up Next?</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Task:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task" value={task.name} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="dueDate">Complete by:</label>
                    <input type="date" id="dueDate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Date" value={task.dueDate} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveTask}>
                Save Task
            </button>
        </form>
    )
};
