export class Authorization {
    /**
     * un método que verifica si un ususario está autorizado para completar una tarea.
     * @param {*} user 
     * @param {*} task 
     */
    checkAuthorization(user, task) {
        //verificar que el usuario esté en la lista de usuarios de la tarea
        //console.log("hhh");

        //verificar que usuario y tarea sean instancias de User y Task respectivamente
        /*if (!(user instanceof User) || !(task instanceof Task)) {
            throw new Error("No son instancias de User y Task");
        }*/

        if (task.users.includes(user)) {
            //verificar que la tarea no esté completada
            if (!task.completed) {
                return true;
            }
        }else{
            throw new Error("No autorizado");
        }
    }
}