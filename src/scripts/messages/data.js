const baseUrl = "http://localhost:8088/messages"

const messageAPI = {
    getMessageData: () => fetch(baseUrl)
    .then(response => response.json()),
    
}

export default API