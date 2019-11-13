const baseUrl = "http://localhost:8088/tasks"

const API = {
    getTaskData: () => fetch(baseUrl)
    .then(response => response.json())
    // .then(response => console.log(response))


    // postTaskData() {
    //     let entryField = document.querySelector("#text")
    //     const dateField = document.querySelector("#date")

    //     entryField.value
    //     dateField.value

    // }


}

export default API