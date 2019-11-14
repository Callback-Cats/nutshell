import htmlMaker from "./htmlMaker.js"
import messageEventListeners from "./eventListeners.js";

const messageDomRender = {
    messageFormRender() {
        let messageContainer = document.querySelector("#message-form");
        messageContainer.innerHTML = htmlMaker.messageHtmlFormMaker();
        messageEventListeners.newMessageSendButtonEventListener();
    },

    messageRender(messageObj) {
        let messageString = ""
        let messageRenderContainer = document.querySelector("#messages")
        messageString = htmlMaker.messageListRenderer(messageObj)
        messageRenderContainer.innerHTML += messageString
    }
}

export default messageDomRender