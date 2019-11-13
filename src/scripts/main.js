import taskDomRenderers from "./tasks/domRenderer.js"
import API from "./tasks/data.js";
import messageAPI from "./messages/data.js"
import messageHTML from "./messages/htmlMaker.js"
import messageDomRenderer from "./messages/domRenderer.js"
// sessionStorage.setItem("activeUser", user.id)

taskDomRenderers.taskFormRender()
API.getTaskData()

.then(tasks => tasks.forEach(task => {
    console.log(task)
    taskDomRenderers.taskRender(task)
})
)
messageDomRenderer.messageFormRender()


