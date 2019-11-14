import API from "./data"
import factoryFunctionMaker from "./factoryFunctionMaker"

export default {
    newTaskSubmitButtonEventListener() {
        let taskSubmitButton = document.querySelector("#submit")
        taskSubmitButton.addEventListener("click", () => {
            const entryField = document.querySelector("#text").value
            const dateField = document.querySelector("#date").value

            let taskObject = factoryFunctionMaker.tasksFactoryFunction(entryField, dateField)
            API.postTaskData(taskObject)
            location.reload()
        })
    },

    // taskEditButtonEventListener () {
    //     let taskEditButton = document.querySelector("#edit")
    //     taskEditButton.addEventListener("click", () => {

    // if



    //     })
    // },

    taskCheckboxEventListener() {
       //TODO: target checkbox using some value--name, value, etc.
       //TODO: add class name if checked so I can target with CSS
       //TODO: PUT to DOM to change completed to true
       const checkbox = document.querySelector("input[value='Edit']")
       checkbox.onchange = () => {
            if (checkbox.checked) {
                
            }
        }
    }
}
//    let sessionId = document.getElementbyId("submit")
//    console.log(sessionId)
//    sessionId = sessionStorage.getItem("activeUser")