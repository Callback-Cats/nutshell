import taskDomRenderers from "./tasks/domRenderer.js"
import API from "./tasks/data.js";
<<<<<<< HEAD
import messageAPI from "./messages/data.js"
import messageHTML from "./messages/htmlMaker.js"
import messageDomRenderer from "./messages/domRenderer.js"
=======
import newsAPI from "./news/data.js";
import newsDomRenderers from "./news/domRenderer.js";

console.log("We got this, guys.")
>>>>>>> master
// sessionStorage.setItem("activeUser", user.id)

taskDomRenderers.taskFormRender()
API.getTaskData()
<<<<<<< HEAD

=======
>>>>>>> master
.then(tasks => tasks.forEach(task => {
    console.log(task)
    taskDomRenderers.taskRender(task)
})
)
<<<<<<< HEAD
messageDomRenderer.messageFormRender()


=======

newsAPI.getNewsArticle()
.then(data => {
        // Work with JSON data here
        console.log(data)
    })

    newsDomRenderers.newsFormRender()
>>>>>>> master
