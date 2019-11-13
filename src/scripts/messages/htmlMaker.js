


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
    }
}