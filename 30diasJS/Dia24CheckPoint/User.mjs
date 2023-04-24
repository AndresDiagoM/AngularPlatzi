export class User {
    constructor(name) {
        // Tu código aquí 👈
        this.name = name;
    }

    /**
     * recibirá una tarea y le notificará al usuario que la tarea fue completada
     * @param {*} task 
     */
    notify(task) {
        // Tu código aquí 👈
        console.log(`La tarea ${task.description} fue completada`);
    }
}
