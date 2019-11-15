import API from "./data"
import messageDomRender from "./domRenderer"


export default {
    newMessageSendButtonEventListener () {
        let messageSendButton = document.querySelector("#send")
        messageSendButton.addEventListener("click", () => {
            API.newMessage()
            API.getMessageData()
            .then(messageDomRender.messageRender())

        
    })
    }
}