//task manager handles all task related fetch calls

const remoteURL = "http://localhost:8088"
//URL is the port that json server is being hosted on

export const getAllTasks = () => {
    return fetch(`${remoteURL}/tasks`)
    .then(res => res.json())
    //waits for response, then parses response into json data
}

export const deleteTask = (id) => {
    return fetch(`${remoteURL}/tasks/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const addTask = (newTask) => {
    return fetch (`${remoteURL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
        //stringifies newTask thats passed in
    }).then(result => result.json())
}