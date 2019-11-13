import taskDomRenderers from "./tasks/domRenderer.js"
import taskEventListeners from "./tasks/eventListeners.js";
import API from "./tasks/data.js";
import messageAPI from "./messages/data.js"
import messageHTML from "./messages/htmlMaker.js"
import messageDomRenderer from "./messages/domRenderer.js"
// sessionStorage.setItem("activeUser", user.id)

taskDomRenderers.taskFormRender()
API.getTaskData()
messageDomRenderer.messageFormRender()
