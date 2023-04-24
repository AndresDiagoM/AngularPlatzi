import { User } from "./User.mjs";
import { TaskManager } from "./TaskManager.mjs";
import { TaskBuilder } from "./TaskBuilder.mjs";
import { TaskDecorator } from "./TaskDecorator.mjs";
import { Authorization } from "./Authorization.mjs";

export class Task {
    constructor(id, description) {
        // Tu código aquí 👈
        this.id = id;
        this.description = description;
        this.completed = false;
        this.users = [];
    }

    assignUser(user) {
        // Tu código aquí 👈
        //verificar que sea instancia de User
        if (!(user instanceof User)) {
            throw new Error("No es instancia de User");
        }
        this.users.push(user);
    }

    completeTask() {
        // Tu código aquí 👈
        this.completed = true;
        this.notifyUsers();
    }

    notifyUsers() {
        // Tu código aquí 👈
        this.users.forEach(user => user.notify(this));
    }
}

//Ejemplo 1:
//Input:
const taskManager1 = TaskManager.getInstance();
const taskManager2 = TaskManager.getInstance();

//console.log(taskManager1 === taskManager2)  //Output: true

//Ejemplo 2:
//Input:
const taskManager = TaskManager.getInstance();
const mockTask = new Task(1, "Mock task")

taskManager.addTask(mockTask);
console.log(taskManager.getTasks())
/*Output:
[
    { id: 1, description: 'Mock task', completed: false, users: [] }
]*/

//Ejemplo 3:
//Input:
const authorization = new Authorization()
const user1 = new User("Juan")
const user2 = new User("Maria")
const task = new Task('4', 'Comprar pan')
task.assignUser(user1)

//console.log(authorization.checkAuthorization(user2, task))
/*Output:
Error("No autorizado")*/


//Ejemplo 4:
//Input:
const task4 = new Task('5', 'Pasear al perro')
const taskDecorator4 = new TaskDecorator(task4, { deadline: '2023-03-31', priority: 'alta' })

console.log(taskDecorator4)
/*Output:
{
    task: Task {
        id: '5',
        description: 'Pasear al perro',
        completed: false,
        users: []
    },
    deadline: '2023-03-31',
    priority: 'alta'
}*/

