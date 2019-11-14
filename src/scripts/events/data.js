const eventsDataBaseUrl = "http://localhost:8088/events"

const eventsAPI = {
    getEventsData() {
        return fetch(eventsDataBaseUrl)
            .then(response => response.json())
    }
}

export default eventsAPI