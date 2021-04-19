import { useState, useEffect } from 'react';
import { useHistory, useParams} from 'react-router';
import { Link } from "react-router-dom";
import { updateTask, getTaskById } from '../../modules/TaskManager';

export const TaskEdit = () => {

    const [task, setTask] = useState({
        name: "",
        dueDate: "",
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

    const updateExistingTask = event => {
       event.preventDefault() /* prevents browser refresh */
       setIsLoading(true); /* prevents user submission*/

       const editedTask = {
           id: taskId,
           name: task.name,
           dueDate: task.dueDate
           //watches for updates within specific key-value pairs
       }

       updateTask(editedTask)
       .then(() => history.push('/tasks'))
       // pushes update to card and reloads main page
    };

    useEffect(() => {
        getTaskById(taskId)
        // fetch individual task (object) by ID
        .then(res => {
            setTask(res);
            // takes response nd sets as current value of 'task'
            setIsLoading(false);
            // allows user submission
        });
    }, [] /*passes in updated array of task*/);


    return (
        <form className="taskEdit">
            <h2 className="taskForm_title">Change Your Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Task:</label>
                    <input type="text" id="name" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Task" value={task.name} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="dueDate">Complete by:</label>
                    <input type="date" id="dueDate" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Date" value={task.dueDate} />
                </div>
            </fieldset>
            
            <div>
            <Link to={`/tasks`} >
            <button>Back</button>
            </Link>
            </div>


            <button type="button" disabled={isLoading} className="btn btn-primary" onClick={updateExistingTask} >
                Update
            </button>
            
        </form>
    )
} 