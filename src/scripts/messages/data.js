const messagebaseUrl = "http://localhost:8088/messages"

const messageAPI = {
    getMessageData: () => fetch(messagebaseUrl)
    .then(response => response.json()),
    
}


export default messageAPI