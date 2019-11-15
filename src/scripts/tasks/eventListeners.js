import API from "./data"
import factoryFunctionMaker from "./factoryFunctionMaker"
import taskDomRenderers from "./domRenderer.js"

export default {
    taskSubmitButtonEventListener() {
        let taskSubmitButton = document.querySelector("#submit")
        taskSubmitButton.addEventListener("click", () => {
            const hiddenFieldId = document.getElementById("formId").value
            console.log("HIDDENFIELDID", hiddenFieldId)
            if (hiddenFieldId !== "") {
                let dateInput = document.querySelector("#date").value
                let taskInput = document.querySelector("#text").value
                console.log("TASK INPUT", taskInput)
                console.log("DATE INPUT", dateInput)
                let editedFactoryFunction = factoryFunctionMaker.tasksFactoryFunction(taskInput, dateInput)
                console.log("EDITED FACTORY FUNCTION", editedFactoryFunction)
                API.taskToPut(hiddenFieldId, editedFactoryFunction)
                location.reload()
            } else {
            const entryField = document.querySelector("#text").value
            const dateField = document.querySelector("#date").value

            let taskObject = factoryFunctionMaker.tasksFactoryFunction(entryField, dateField)
            console.log("TASK OBJECT", taskObject)
            API.postTaskData(taskObject)
  
        }
    })
},

    // taskEditButtonEventListener () {
    //     let taskEditButton = document.querySelector("#edit")
    //     taskEditButton.addEventListener("click", () => {

    // if



    //     })
    // },

    //     taskCheckboxEventListener() {
    //         //TODO: target checkbox using some value--name, value, etc.
    //         //TODO: add class name if checked so I can target with CSS
    //         //TODO: PUT to DOM to change completed to true
    //         const checkbox = document.querySelector("#type-checkbox")
    //         checkbox.addEventListener("onchange", () => {
    //             if (checkbox.checked == true) {

    //                 factoryFunctionMaker.changeFalseToTrueFunction()
    //             }
    //         },

    taskDeleteEditButtonEventListener() {
        const taskDeleteSection = document.querySelector("#tasks-rendered")
        // console.log("TASK DELETE", taskDeleteSection)
        taskDeleteSection.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteTask--")) {
                const taskToDelete = event.target.id.split("--")[1]
                console.log("TASK TO DELETE", taskToDelete)
                API.deleteTaskData(taskToDelete)
                location.reload()
            } else if (event.target.id.startsWith("editTask--")) {
                const taskToEdit =
                    event.target.id.split("--")[1]
                    console.log("TASK TO EDIT ",taskToEdit)
                taskDomRenderers.taskEditEntryToForm(taskToEdit)
            }
        })
    }
}
//    let sessionId = document.getElementbyId("submit")
//    console.log(sessionId)
//    sessionId = sessionStorage.getItem("activeUser")