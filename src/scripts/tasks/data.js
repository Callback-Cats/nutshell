const baseUrl = "http://localhost:8088/tasks"

const API = {
    getTaskData: () => fetch(baseUrl).then(response =>
        console.log(response))
        // response.json()),


    // postTaskData() {

    // }


}

export default API