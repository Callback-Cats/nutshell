export default {
    messageHtmlFormMaker () {
        return `
<form id="message-form">
<h1>Messages</h1>
<label for="text">New Message:</label>
<br>
<input type="text" name="text" id="">
<br>
<label for="date"></label>
<br>
<input type="date" name="date" id="date">
<br>
</form>
<input type="submit" name="send" id="send" value="send">
    `
    },

    messageListRenderer(messageObj) {
        return `
    <p>from who:${messageObj.id}</p>
    <p>message:${messageObj.message}</p>
    <p>time sent ${messageObj.time_stamp}</p>
    <input type="submit" id="edit" name="edit" value="Edit">
    <input type="submit" id="delete" name="delete" value="Delete">
</article>
    `
}
}
