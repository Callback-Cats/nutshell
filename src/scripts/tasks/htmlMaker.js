

export default {
    taskHtmlFormMaker () {
        return `
<form id="messages-Form">
<h1>To Do List</h1>
<label for="text">New Task:</label>
<br>
<input type="text" name="text" id="text" placeholder="eg. play a round of golf">
<br>
<label for="date">To Be Completed By:</label>
<br>
<input type="date" name="date" id="date">
<br>
</form>
<input type="submit" name="submit" id="submit"> 
    `
    }
}