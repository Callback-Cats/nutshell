const baseUrl = "http://localhost:8088/tasks"

const API = {
    getTaskData: () => fetch(baseUrl)
    .then(response => response.json()),
    // .then(response => console.log(response))


    postTaskData(taskObj) {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
            .then(response => response.json())
    },

    deleteTaskData (taskObj) {
        return fetch(`${baseUrl}/${taskObj}`, {
            method: "DELETE",
        })
        .then(response => response.json())
    },

    taskToEdit (taskToEdit) {
        return fetch(`${baseUrl}/${taskToEdit}`)
            .then(response => response.json())
    },

    taskToPut (hiddenId, editedTaskObj) {
        return fetch(`${baseUrl}/${hiddenId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedTaskObj)
        })
        .then(response => response.json())
    }
}

export default API