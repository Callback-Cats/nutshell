import taskDomRenderers from "./tasks/domRenderer.js"
import API from "./tasks/data.js";
import newsAPI from "./news/data.js";
import htmlMaker from "./news/htmlMaker.js";
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
   
        console.log("this is it",data)
    })
    newsDomRenderers.newsFormRender()
