import API from "./data"


export default {
    newTaskSubmitButtonEventListener () {
        let taskSubmitButton = document.querySelector("#submit")
        taskSubmitButton.addEventListener("click", () => {
            API.postTaskData()
        })
    }
}