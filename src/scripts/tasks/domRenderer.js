import htmlMaker from "./htmlMaker.js"
import taskEventListeners from "./eventListeners.js";

const taskDomRenderers = {
    taskFormRender() {
        let taskContainer = document.querySelector("#tasks")
        taskContainer.innerHTML = htmlMaker.taskHtmlFormMaker()
        taskEventListeners.newTaskSubmitButtonEventListener()
    }
}

export default taskDomRenderers