export default {
    tasksFactoryFunction(task, date) {
        return {
            user_id: 1,
            date: date,
            task: task,
            complete: false
        }
    },


changeFalseToTrueFunction() {
        return {
            user_id: 1,
            date: date,
            task: task,
            complete: true
        }
    }
}