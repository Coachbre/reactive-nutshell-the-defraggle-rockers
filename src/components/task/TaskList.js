import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import {TaskCard} from "./TaskCard";
import {getAllTasks, deleteTask } from '../../modules/TaskManager';

export const TaskList = () => {
    //declaring state variable (as an empty array)
    const [tasks, setTasks] = useState([]);
    /*empty array in useState() is the INITIAL value of tasks, and
    'tasks is the CURRENT value. setAnimals is used to change the value of 'tasks' */
    const getTasks = () => {
        //^ getTasks() ultimately returns task array from json
        return getAllTasks()
        //^ getAllTasks() fetches json info
        .then(tasksFromAPI /*taco*/ => {
            setTasks(tasksFromAPI /*taco*/)
            /* waits for data then 'setTasks' sets the 'tasks'
            variable equal to API data */
        });
    };

    const handleDelete = id => {
        deleteTask(id)
        //handleDelete calls deleteTask from TaskManager
        .then(() => getAllTasks()
        .then(setTasks));
        //then fetches new array and sets as 'Tasks'
    };

    let history = useHistory();
    //called in button for new task creation

    useEffect(() => {
        //useEffect() is used to call the getTasks() function
        //runs on second render after return reads an empty array
        getTasks();
    }, []);
    return (
       
        
        //runs the 1st time with empty array, then ^^ useEffect() runs after
        <div className="container-cards">
             <section className="section-content">
             <button type="button"
                        className="btn btn-primary"
                        onClick={() => { history.push("/tasks/entry") }}>
                        Create New Task
                        </button>
            </section>
            {tasks.map(taskObj =>
                //iterates over the array
                <TaskCard
                key={taskObj.id} 
                // unique key needed by react (will work without, but it good convention)
                task={taskObj}
                // taskObj from array is set equal to 'task' (a prop thats passed into TaskCard)
                handleDelete={handleDelete} />
                )}
        </div>
    );
};