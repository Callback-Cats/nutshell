import API from "./data"


export default {
    newMessageSendButtonEventListener () {
        let messageSendButton = document.querySelector("#send")
        messageSendButton.addEventListener("click", () => {
            API.postMessageData()
        })
    }
}