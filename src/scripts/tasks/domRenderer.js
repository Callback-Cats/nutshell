import htmlMaker from "./htmlMaker.js"
import taskEventListeners from "./eventListeners.js";

const taskDomRenderers = {
    taskFormRender() {
        let taskContainer = document.querySelector("#tasks")
        taskContainer.innerHTML = htmlMaker.taskHtmlFormMaker()
        taskEventListeners.newTaskSubmitButtonEventListener()
    },

    taskRender(taskObj) {
        let taskString = ""
        let taskRenderContainer = document.querySelector("#tasks-rendered")
        taskString = htmlMaker.taskListRenderer(taskObj)
        console.log(taskString)
        taskRenderContainer.innerHTML += taskString
    }
}

export default taskDomRenderers