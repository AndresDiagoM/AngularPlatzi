import { LinkedList } from "./SinglyLinkedList.mjs";
import { Node } from "./Node.mjs";

export class LinkedListRecharged extends LinkedList {
    get(index) {
        if (!this.head || (index >= this.length) || (index < 0)) { // Si no hay head, no hay nada que buscar 
            return null;
        }

        if (index === 0) { // Si el índice coincide con el que buscamos, devolvemos el nodo
            return this.head.value;
        }

        let currentNode = this.head; // Si no, iteramos sobre la lista
        let currentIndex = 0;
        while (currentNode.next) {
            currentIndex++;
            if (currentIndex === index) { // Si el índice coincide con el que buscamos, devolvemos el nodo
                return currentNode.next.value;
            }
            currentNode = currentNode.next; // Si no, seguimos iterando
        }
    }

    insertAt(index, value) {
        if (!this.head || (index >= this.length) || (index < 0)) { // Si no hay head, no hay nada que buscar 
            return null;
        }

        let newNode = new Node(value);
        let currentNode = this.head; 

        if (index === 0) { // Si el índice coincide con el que buscamos, devolvemos el nodo
            newNode.next = currentNode;
            this.head = newNode;
            this.length++;
            return;
        } else if(index === 1) {
            newNode.next = currentNode.next;
            this.head.next = newNode;
            this.length++;
            return;
        }

        let currentIndex = 0;
        while (currentNode.next) {
            currentIndex++;
            if ( (currentIndex+1) === index) { // Si el índice coincide 
                currentNode.next = newNode; // Insertamos el nuevo nodo
                newNode.next = currentNode.next.next;
                this.length++;
                break;
            }
            currentNode = currentNode.next; // Si no, seguimos iterando
        }
    }

    toArray() {
        let array = [];
        let currentNode = this.head;

        array.push(currentNode.value);
        while (currentNode.next) {
            array.push(currentNode.next.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    removeAt(index) {
        if (!this.head || (index >= this.length) || (index < 0)) { // Si no hay head, no hay nada que buscar 
            return null;
        }
        let currentNode = this.head; 

        if (index === 0) { // Si el índice coincide con el que buscamos, devolvemos el nodo
            this.head = currentNode.next;
            this.length--;
            return currentNode.value;
        }else if(index === 1) {
            this.head.next = currentNode.next.next;
            this.length--;
            return currentNode.next.value;
        }

        let currentIndex = 0;
        let returnNode;
        while (currentNode.next) {
            currentIndex++;
            if ( (currentIndex+1) === index) { // Si el índice coincide 
                returnNode = currentNode.next; // Guardamos el nodo a eliminar
                currentNode.next = currentNode.next.next; // Eliminamos el nodo
                this.length--;
                return returnNode.value;
            }
            currentNode = currentNode.next; // Si no, seguimos iterando
        }

    }
}

//Ejemplo 1:
//Input:
const linkedList = new LinkedListRecharged();
//El método append ya se encuentra implementado por lo que no debes preocuparte
linkedList.append("30");
linkedList.append("Días");
linkedList.append("De javascript");
console.log(linkedList.toArray()) //Output: ["30", "Días", "De javascript"]
console.log(linkedList.get(1))  //Output: "Días"


//Ejemplo 2:
//Input:
const linkedList2 = new LinkedListRecharged();
linkedList2.append(1);
linkedList2.append(2);
linkedList2.append(3);
linkedList2.insertAt(1, 5)
console.log(linkedList2.toArray())  //Output:  [1, 5, 2, 3]


//Ejemplo 3:  //Input:
const linkedList3 = new LinkedListRecharged();
linkedList3.append(1);
linkedList3.append(2);
linkedList3.append(3);
linkedList3.removeAt(1);
console.log(linkedList3.toArray())   //Output:  //[1, 3]
console.log(linkedList3.get(1))