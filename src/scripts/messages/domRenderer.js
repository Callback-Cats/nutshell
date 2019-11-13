import htmlMaker from "./htmlMaker.js"
import messageEventListeners from "./eventListeners.js";

const messageDomRender = {
    messageFormRender() {
        let messageContainer = document.querySelector("#message-form")
        messageContainer.innerHTML = htmlMaker.messageHtmlFormMaker()
        messageEventListeners.newmesageSubmitButtonEventListener()
    }
}

export default messageDomRender