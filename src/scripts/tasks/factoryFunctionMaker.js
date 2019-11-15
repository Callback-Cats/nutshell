export default {
    tasksFactoryFunction(task, date) {
        return {
            user_id: 1,
            date: date,
            task: task,
            complete: false
        }
    },


    booleanFactoryFunction(taskInput, dateInput) {
        return {
            user_id: 1,
            date: dateInput,
            task: taskInput,
            complete: true
        }
    }
}