



const eventsHtmlMaker = {

    renderLoggedEventComponent(event) {
        console.log("event",event)
        return `
        <section>
        <h3>${event.name}</h3>
        <p>${event.date}<p>
        <p>${event.location}<p>
        </section>
    `
    },

    createEventForm() {
        return `

        <form id="event-form">
        <h1>Events</h1>
        <label for="events">Upcoming Events:</label>
        <br>
        <input type="text" name="event-name" id="name" placeholder="Upcoming Event">
        <br>
        <label for="date">Date:</label>
        <br>
        <input type="date" name="date" id="date">
        <br>
        <label for="location">Location:</label>
        <br>
        <input type="text" name="location-name" id="location" placeholder="Upcoming Event">
        <br>
        </form>
        <button type="button" id="save-entry">Save</button>
        `
    }

}

export default eventsHtmlMaker