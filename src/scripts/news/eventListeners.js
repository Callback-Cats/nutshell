import API from "./data"


export default {
    newNewsSaveButtonEventListener () {
        let newsSaveButton = document.querySelector("#save")
        newsSaveButton.addEventListener("click", () => {
            API.postNewsData()
        })
    }
}