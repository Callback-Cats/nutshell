const baseUrl = "http://localhost:8088/news"

const API = {
    getNewsArticle: () => fetch(baseUrl)
    .then(response => response.json())
    // .then(newsArticles => console.log(newsArticles))
    

}

export default API