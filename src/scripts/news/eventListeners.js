import API from "./data"


export default {
    newNewsSaveButtonEventListener () {
        let newsSaveButton = document.querySelector("#news")
        newsSaveButton.addEventListener("click", () => {
            API.postNewsData()
            
        })
    }
}
