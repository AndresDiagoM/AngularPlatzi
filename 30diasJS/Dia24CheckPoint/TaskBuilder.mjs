import { Task } from "./exercise.mjs";

/**
 * task: Instanciará la clase task creada al inicio
 * Deberá tener un método por cada uno de los siguientes datos: id, description, completed, 
    users (debe ser capaz de recibir 1 o varios users), deadline, priority.
 */
export class TaskBuilder {
    constructor() {
        // Tu código aquí 👈
        this.task = new Task(0, "");
    }

    setId(id) {
        // Tu código aquí 👈
        this.task.id = id;
        return this;
    }

    setDescription(description) {
        // Tu código aquí 👈
        this.task.description = description;
        return this;
    }

    setCompleted(completed) {
        // Tu código aquí 👈
        this.task.completed = completed;
        return this;
    }

    setUsers(users) {
        // Tu código aquí 👈
        //verificar que sean instancias de User
        users.forEach(user => {
            if (!(user instanceof User)) {
                throw new Error("No es instancia de User");
            }
        });
        this.task.users.push(...users)
        return this;
    }

    //decorator: deadline y priority
    setDeadline(deadline) {
        this.task.deadline = deadline
        return this
    }

    setPriority(priority) {
        this.task.priority = priority
        return this
    }

    build() {
        // Tu código aquí 👈
        let options = {
            deadline: this.deadline,
            priority: this.priority
        }
        //return new TaskDecorator(this.task, options);
        return this.task;
    }
}
