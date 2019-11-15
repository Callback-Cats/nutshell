export default {
    newsHtmlArticleMaker (newsObj) {
        return `    
        <article class="${newsObj.id}">
            <h1 class="title">${newsObj.news}</h1>
            <link>${newsObj.url}</link>
            <h6>${newsObj.synopsis}</h6>
            <h3>${newsObj.time_stamp}</h3>
        </article>
    `
}
};

