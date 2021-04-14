//task manager handles all task related fetch calls

const remoteURL = "http://localhost:8088"
//URL is the port that json server is being hosted on

export const getAllTasks = () => {
    return fetch(`${remoteURL}/tasks`)
    .then(res => res.json())
    //waits for response, then parses response into json data
}