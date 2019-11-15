import eventsAPI from "./data.js"
import renderDom from "./domRenderer.js"
import buildEvent from "./factoryFunctionMaker.js"


const addNewEventManager = {

    handleNewEventEntry() {
        console.log("hi")
        const eventName = document.getElementById("name").value
        const eventDate = document.getElementById("date").value
        const eventLocation = document.getElementById("location").value
        console.log("events!", eventName)
        console.log("events!", eventDate)
        console.log("events!", eventLocation)

        const eventObject = buildEvent(eventName, eventDate, eventLocation)
        console.log("build new event", eventObject)

        eventsAPI.postNewEvent(eventObject).then(() => {
            eventsAPI.getEventsData().then(response => {
                renderDom.renderEvents(response)
                // TODO: create edit and delete button event listeners.
                //deleteButtonEventManager.attachEventListenerToDeleteButton()
                //editButtonEventManager.attachEventListenerToEditButton()
            })

        })

    },

    attachEventListenerToNewEventButton() {
        const addNewEventButton = document.getElementById("add-entry")
        addNewEventButton.addEventListener("click", this.handleNewEventEntry)
    }

}

export default addNewEventManager

