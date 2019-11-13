import API from "./data"


export default {
    newMessageSendButtonEventListener () {
        let messageSendButton = document.querySelector("#")
        messageSendButton.addEventListener("click", () => {
            API.postMessageData()
        })
    }
}