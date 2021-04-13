import React, { useState } from 'react';
import {TaskCard} from "./TaskCard";

export const TaskList = () => {
    //declaring state variable (as an empty array)
    const [tasks, setTasks] = useState([]);
    /*empty array in useState() is the INITIAL value of tasks, and
    'tasks is the CURRENT value. setAnimals is used to change the value of 'tasks' */

    const getTasks = () => {
        //returns 
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