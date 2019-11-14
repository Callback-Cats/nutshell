import eventsHtmlMaker from "./htmlMaker"

const renderDom = {

    renderCreateEventForm() {
        const eventEntryFormHtml = document.querySelector("#events-container")
        eventEntryFormHtml.innerHTML = eventsHtmlMaker.createEventForm()

    },
    renderEvents(events) {
        let htmlForAllEvents = ""
        events.forEach(event => {
            //TODO: Make makeNewEventComponent function htmlMaker
            const eventHtml = eventsHtmlMaker.renderLoggedEventComponent(event)
            htmlForAllEvents += eventHtml
        })
        const logArticle = document.querySelector("#events")
        logArticle.innerHTML = htmlForAllEvents
    }
}

export default renderDom