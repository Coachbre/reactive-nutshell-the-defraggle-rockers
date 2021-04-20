//author: Bre Coach
// renders list of tasks within array with false as the isComplete value

import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import { TaskCard } from "./TaskCard";
import { getAllTasks, deleteTask, hideTask } from '../../modules/TaskManager';
import "./TaskCard.css"

export const TaskList = () => {

    //declaring state variable (as an empty array)
    const [tasks, setTasks] = useState([]);
    /*empty array in useState() is the INITIAL value of tasks, and
    'tasks is the CURRENT value. setAnimals is used to change the value of 'tasks' */
    const getTasks = () => {
        //^ getTasks() ultimately returns task array from json
        return getAllTasks()
            //^ getAllTasks() fetches json info
            .then((tasksFromAPI /*taco*/) => {
        
                setTasks(tasksFromAPI /*taco*/)

                /* waits for data then 'setTasks' sets the 'tasks'
                variable equal to API data */
            });
    };


    const handleHideTask = task => {
        hideTask(task)
            .then(() => getAllTasks()
                .then(res => {
                   const filteredTasks = res.filter(task => task.isComplete === false)
                   // 'filteredTasks' is filtering the response and returning only isComplete: false
                    setTasks(filteredTasks)
                    //setTasks is setting 'filteredTasks' equal to 'tasks' then setting as current state
                })
            )
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
            <h1 className="task-title">To Do List</h1>
                <button type="button"
                    className="creat-task-btn"
                    onClick={() => { history.push("/tasks/entry") }}>
                    Create New Task
                        </button>
            <div>
            {tasks.map(taskObj => {
                //iterates over the array
                if (taskObj.isComplete === false) {
                    // Only return a secific task card if isComplete = false (checkbox not selected)
                 return (
                     <ul>
                  <TaskCard
                        key={taskObj.id}
                        // unique key needed by react (will work without, but is good convention)
                        task={taskObj}
                        // taskObj from array is set equal to 'task' (a prop thats passed into TaskCard)
                        handleDelete={handleDelete}
                        handleHideTask={handleHideTask} /></ul>
                 )
                }
        })}
        </div>
        </div>
    );
};