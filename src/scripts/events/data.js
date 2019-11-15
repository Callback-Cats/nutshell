
const eventsDataBaseUrl = "http://localhost:8088/events"

const eventsAPI = {
    getEventsData() {
        return fetch(eventsDataBaseUrl)
            .then(response => response.json())
    },
    postNewEvent(newEvent) {
        return fetch(eventsDataBaseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application.json"
            },
            body: JSON.stringify(newEvent)
        })
            .then(response => response.json())
    }
}

export default eventsAPI