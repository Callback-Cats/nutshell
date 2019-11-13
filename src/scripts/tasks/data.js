const baseUrl = "http://localhost:8088/tasks"

const API = {
    getTaskData: () => fetch(baseUrl)
    .then(response => response.json()),


    // postTaskData() {

    // }


}

export default API