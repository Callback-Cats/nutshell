import taskDomRenderers from "./tasks/domRenderer.js"
import API from "./tasks/data.js";
import messageAPI from "./messages/data.js"
import messageHTML from "./messages/htmlMaker.js"
import messageDomRenderer from "./messages/domRenderer.js"
import newsAPI from "./news/data.js";
import newsDomRenderers from "./news/domRenderer.js";

console.log("We got this, guys.")
// sessionStorage.setItem("activeUser", user.id)

taskDomRenderers.taskFormRender()
API.getTaskData()

.then(tasks => tasks.forEach(task => {
    console.log(task)
    taskDomRenderers.taskRender(task)
})
)

newsAPI.getNewsArticle()
.then(data => {
        // Work with JSON data here
        console.log(data)
    })


    messageAPI.getMessageData()
    .then(message => message.forEach(message=> {
        console.log(message)
        messageDomRenderer.messageRender(message)
    })
    )
    
    messageDomRenderer.messageFormRender()
    newsDomRenderers.newsFormRender()


