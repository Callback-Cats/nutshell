
import htmlMaker from "./htmlMaker.js"
import newsEventListeners from "./eventListeners.js";

const newsDomRenderers = {
    newsFormRender() {
        let newsContainer = document.querySelector("#news")
        newsContainer.innerHTML = htmlMaker.newsHtmlArticleMaker()
        newsEventListeners.newNewsSaveButtonEventListener()
    },

}

export default newsDomRenderers