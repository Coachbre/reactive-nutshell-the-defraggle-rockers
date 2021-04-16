import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import { editTask } from '../../modules/TaskManager';

export const TaskEdit = (id) => {

    const [task, setTask] = useState({
        name: task.id,
        dueDate: task.dueDate,
        isComplete: false
        // ^ initial value of 'task'
    });
    const [isLoading, setIsLoading] = useState(false);
    //prevents user from submitting multiple times while data is being updated
     
    const {taskId} = useParams();
    const history = useHistory();

    const handleFieldChange = (event) => {
        const changedTask = { ...task };
        //changedTask is now equal to the copy of 'task'

        changedTask[event.target.id] = event.target.value;
        //value of the changed task = use rinput
        setTask(changedTask);
        //sets current value of 'task' equal to 'stateToChange'
    };

    const handleClickEditTask = () => {
        editTask(task)
        .then(() => history.push("/tasks/"))
    }

    return (
        <form className="taskEdit">
            <h2 className="taskForm_title">Change Your Task</h2>
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
            
            <Link to={`/tasks`} >
            <button className="btn btn-primary" onClick={handleClickEditTask} >
                Update
            </button>
            </Link>
            
        </form>
    )
} 