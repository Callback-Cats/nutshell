const baseUrl = "http://localhost:8088/news"

const API = {
    getNewsArticle: () => fetch(baseUrl)
    .then(response => response.json())

}
console.log(API)



// // Replace ./data.json with your JSON feed
// fetch('http://localhost:8088/news')
// .then(response => {
//     return response.json()
// })
// .then(data => {
//     // Work with JSON data here
//     console.log(data)
// })
// .catch(err => {
//     // Do something for an error here
// })

export default API