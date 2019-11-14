

export default {
    taskHtmlFormMaker () {
        return `
<form id="taskForm">
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
    },

    taskListRenderer (taskObj) {
        return `
<article id="${taskObj.id}">
<input type="checkbox" id="type-checkbox" name="checkbox"><span>Done!</span> 
    <p>Task: ${taskObj.task}</p>
    <p>To be completed by: ${taskObj.date}</p>
    <input type="submit" id="edit" name="edit" value="Edit">
</article>
    `
  }
}