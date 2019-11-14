import taskDomRenderers from "./tasks/domRenderer.js"
import API from "./tasks/data.js";
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

data.getEventsData()
    .then(events => console.log("WOW GREAT JOB SHAWNA YOU ARE LEARNING SO MUCH IT'S REALLY GREAT", events))
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

    newsDomRenderers.newsFormRender()

