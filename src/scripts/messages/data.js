const messagebaseUrl = "http://localhost:8088/messages"

const messageAPI = {
    getMessageData: () => fetch(messagebaseUrl)
    .then(response => response.json()),
    
    newMessage(newMessageEntry) {           
        return fetch("http://localhost:8088/messages", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newMessageEntry)
        })
      }

}


export default messageAPI