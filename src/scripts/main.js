import taskDomRenderers from "./tasks/domRenderer.js"
import API from "./tasks/data.js"
import taskEventListener from "./tasks/eventListeners.js"
console.log("We got this, guys.")
// sessionStorage.setItem("activeUser", user.id)

taskDomRenderers.taskFormRender()
API.getTaskData()
    .then(tasks => tasks.forEach(task => {
        console.log(task)
        taskDomRenderers.taskRender(task)
        taskEventListener.taskEditButtonEventListener()
        taskEventListener.taskCheckboxEventListener()
    })
    )
