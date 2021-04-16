import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import { editTask } from '../../modules/TaskManager';

export const TaskEdit = (id) => {

    const [task, setTask] = useState({
        name: task.id,
        dueDate: task.dueDate,
        isComplete: false
    });
    const [isLoading, setIsLoading] = useState(false);
    //prevents user from submitting multiple times while data is being updated
     
    const {taskId} = useParams();
    const history = useHistory();
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