/**
     * task: recibirá una tarea ya hecha con la clase de Task
     * deadline: fecha limite para completar la tarea en el siguiente formato (AAAA-MM-DD)
     * priority: prioridad para completar la tarea (high, medium o low)
     * Priority y deadline vendrán dentro de un objeto options
 */
export class TaskDecorator {
    constructor(task, options) {
        // Tu código aquí 👈
        this.task = task;
        //this.options = options;
        //verificar formato de fecha (2000-05-03) de deadline
        let regex = /^\d{4}-\d{2}-\d{2}$/;
        if (regex.test(options.deadline) ) {
            this.deadline = options.deadline;
        }else{
            this.deadline = null;
            //throw new Error("Formato de fecha incorrecto");
        }

        //verificar prioridad
        if (options.priority == "alta" || options.priority == "media" || options.priority == "baja") {
            this.priority = options.priority;
        }else{
            this.priority = null;
            //throw new Error("Prioridad incorrecta");
        }
    }

    assignUser(user) {
        // Tu código aquí 👈
        this.task.assignUser(user);
    }

    completeTask() {
        // Tu código aquí 👈
        this.task.completeTask();
    }

    notifyUsers() {
        // Tu código aquí 👈
        this.task.notifyUsers();
    }
}