import taskDomRenderers from "./tasks/domRenderer.js"
import API from "./tasks/data.js"
import taskEventListener from "./tasks/eventListeners.js"
import eventsAPI from "./events/data.js"
import renderDom from "./events/domRenderer.js"
import addNewEventManager from "./events/eventListeners.js"
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
        // console.log(task)
        taskDomRenderers.taskRender(task)
        // taskEventListener.taskEditButtonEventListener()
    })
    )
taskEventListener.taskDeleteEditButtonEventListener()
taskEventListener.taskCheckboxEventListener()


newsAPI.getNewsArticle()
    .then(data => {
        // Work with JSON data here
        // console.log(data)
    })

newsDomRenderers.newsFormRender()



eventsAPI.getEventsData()
    .then(events => renderDom.renderEvents(events)
    )
    renderDom.renderCreateEventForm()
    addNewEventManager.attachEventListenerToNewEventButton()

newsAPI.getNewsArticle()
    .then(data => {
        // Work with JSON data here
        // console.log(data)
    })


newsDomRenderers.newsFormRender()

    


messageDomRenderer.messageFormRender()
    messageAPI.getMessageData()
    .then(message => message.forEach(message=> {
        messageDomRenderer.messageRender(message)
     })
    )
