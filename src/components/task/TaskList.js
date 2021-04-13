import React, { useState } from 'react';
import {TaskCard} from "./TaskCard";
import {getAllTasks } from '../../modules/TaskManager';

export const TaskList = () => {
    //declaring state variable (as an empty array)
    const [tasks, setTasks] = useState([]);
    /*empty array in useState() is the INITIAL value of tasks, and
    'tasks is the CURRENT value. setAnimals is used to change the value of 'tasks' */

    const getTasks = () => {
        //^ getTasks() ultimately returns task array from json
        return getAllTasks() 
        //getAllTasks() fetches json info
        .then(tasksFromAPI => {
            setTasks(tasksFromAPI)
        })
    }
    

    return (
        <div className="task-cards">
            {tasks.map(task =>
                //iterates thru the array
                <TaskCard />   
                )}
        
        </div>
    );
};