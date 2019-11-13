import taskDomRenderers from "./tasks/domRenderer.js"
import taskEventListeners from "./tasks/eventListeners.js";
import API from "./tasks/data.js";
import data from "./events/data.js"

console.log("We got this, guys.")
// sessionStorage.setItem("activeUser", user.id)

taskDomRenderers.taskFormRender()
API.getTaskData()
data.getEventsData()
.then(events => console.log("WOW GREAT JOB SHAWNA YOU ARE LEARNING SO MUCH IT'S REALLY GREAT", events))
