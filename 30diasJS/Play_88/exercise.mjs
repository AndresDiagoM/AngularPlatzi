import { Node } from "./Node.mjs";

export class PatientList {
    constructor(beds) {
        this.head = null;
        this.tail = null;
        this.lenght=0;
        this.beds = beds;
        //crear un set de camas, key son numeros con el numero de camas que le pasamos
        //value es un booleano que indica si esta ocupada o no
        this.bedSet = [];
        for (let i = 1; i <= beds; i++) {
            this.bedSet.push([i, false]);
        }
        //console.log(this.bedSet)
        //console.log(this.bedSet[0])
    }

    addPatient(name, age) {
        if(!this.head){
            this.head = new Node(name, age, this.bedSet[0][0]);
            this.bedSet[0][1] = true;
            this.tail = this.head;
        }else{
            if(this.getAvailableBeds()===0){
                throw new Error("No hay camas disponibles");
            }else{
                //Buscar la primera cama disponible y asignarla
                for(let bed of this.bedSet){
                    if(bed[1]===false){
                        bed[1]=true;
                        let newNode = new Node(name, age, bed[0]);
                        this.tail.next = newNode;
                        this.tail = newNode;
                        break;
                    }
                }
            }
        }
    }

    removePatient(name) {
        //Buscar al paciente 
        let current = this.head;
        let previous = null;
        while(current){
            if(current.name===name){
                //Si es el primero
                if(current===this.head){
                    this.head = current.next;
                    current.next = null;
                    //Buscar la cama y ponerla disponible
                    for(let bed of this.bedSet){
                        if(bed[0]===current.bedNumber){
                            bed[1]=false;
                            break;
                        }
                    }
                    return;
                }
                //Si es el ultimo
                if(current===this.tail){
                    this.tail = previous;
                    this.tail.next = null;
                    //Buscar la cama y ponerla disponible
                    for(let bed of this.bedSet){
                        if(bed[0]===current.bedNumber){
                            bed[1]=false;
                            break;
                        }
                    }
                    return;
                }
                //Si es un nodo intermedio
                previous.next = current.next;
                current.next = null;
                //Buscar la cama y ponerla disponible
                for(let bed of this.bedSet){
                    if(bed[0]===current.bedNumber){
                        bed[1]=false;
                        break;
                    }
                }
                return;
            }
            previous = current;
            current = current.next;
        }

        //Si no lo encuentra
        throw new Error( "Paciente no encontrado");
    }

    getPatient(name) {
        // Buscar el paciente y devolverlo
        let current = this.head;
        let nodeAux = new Node();
        while(current){
            if(current.name===name){
                nodeAux = current;
                return {name: nodeAux.name, age: nodeAux.age, bedNumber: nodeAux.bedNumber};
            }
            current = current.next;
        }
        //Si no lo encuentra
        throw new Error( "Paciente no encontrado");
    }

    getPatientList() {
        // retornar una lista con todos los pacientes
        let current = this.head;
        let list = [];
        while(current){
            list.push({name: current.name, age: current.age, bedNumber: current.bedNumber});
            current = current.next;
        }
        return list;
    }

    getAvailableBeds() {
        //contar cuantas camas disponibles hay en el set
        let total = 0;
        for (let bed of this.bedSet) {
            if (bed[1] === false) {
                total++;
            }
        }
        return total;
    }
}

//Ejemplo 1:
//Input:
const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)
console.log(list.getPatientList())
//Output:
/*[
    { name: "Paciente 1", age: 20, bedNumber: 1 },
    { name: "Paciente 2", age: 30, bedNumber: 2 },
]*/


//Ejemplo 2:
//Input:
const list2 = new PatientList(3)
list2.addPatient("Paciente 1", 20)
list2.addPatient("Paciente 2", 30)
console.log(list2.getPatient("Paciente 1"))
//Output:
/*{
    name: "Paciente 1",
    age: 20,
    bedNumber: 1,
}*/



//Ejemplo 3:
//Input:
const list3 = new PatientList(3)
list3.addPatient("Paciente 1", 20)
list3.addPatient("Paciente 2", 30)
list3.removePatient("Paciente 1")
console.log(list3.getPatientList())
//Output:
/*[
    { name: "Paciente 2", age: 30, bedNumber: 2 },
]*/