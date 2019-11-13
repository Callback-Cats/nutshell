import taskDomRenderers from "./tasks/domRenderer.js"
import taskEventListeners from "./tasks/eventListeners.js";
import API from "./tasks/data.js";
console.log("We got this, guys.")
// sessionStorage.setItem("activeUser", user.id)

taskDomRenderers.taskFormRender()
API.getTaskData()