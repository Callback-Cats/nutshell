import eventsFormManager from "./htmlMaker"

const renderDom = {
    renderEvents(events) {
        let htmlForAllEvents= ""
        events.forEach(event => {
            const eventHtml = eventsFormManager.makeNewEventComponent(event)
            htmlForAllEvents += eventHtml
        })
        const logAllEventsDiv = document.querySelector("#events-log-container")(event)
    }


}






// const renderDom = {
//     renderJournalEntries(entries) {
//       let HtmlForAllEntries = ""
//       entries.forEach(entry => {
//         const entryHtml = entryManager.makeJournalEntryComponent(entry)
//         HtmlForAllEntries += entryHtml
//       })
//       const logArticle = document.querySelector(".entryLog")(event)
//       logArticle.innerHTML = HtmlForAllEntries
//     },
//     renderJournalEntryForm() {
//       const entryFormHtml = document.getElementById("journal-entry-form")
//       entryFormHtml.innerHTML = entryManager.makeJournalEntryForm()
//     }
//   }