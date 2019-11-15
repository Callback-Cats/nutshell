import htmlMaker from "./htmlMaker.js"
import taskEventListeners from "./eventListeners.js";
import API from "./data.js";

const taskDomRenderers = {
    taskFormRender() {
        let taskContainer = document.querySelector("#tasks")
        taskContainer.innerHTML = htmlMaker.taskHtmlFormMaker()
        taskEventListeners.taskSubmitButtonEventListener()
    },

    taskRender(taskObj) {
        let taskString = ""
        let taskRenderContainer = document.querySelector("#tasks-rendered")
        taskString = htmlMaker.taskListRenderer(taskObj)
        console.log(taskString)
        taskRenderContainer.innerHTML += taskString
    },

    taskEditEntryToForm (taskObj) {
        scroll(0,0)
        let hiddenId = document.querySelector("#formId")
        let dateInput = document.querySelector("#date")
        let taskInput = document.querySelector("#text")
        API.taskToEdit(taskObj)
        .then(returnedTask => {
            console.log(returnedTask)
            hiddenId.value = returnedTask.id
            dateInput.value = returnedTask.date
            taskInput.value = returnedTask.task
        })


    }
}

export default taskDomRenderers