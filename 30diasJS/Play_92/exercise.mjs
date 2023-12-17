import { Mail } from "./mail.mjs";

export class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(from, to, body, subject) {
        let newMail = new Mail(from, to, body, subject);

        if (this.length === 0) {
            this.first = newMail;
            this.last = newMail;
            this.length++;
        } else {
            this.last.next = newMail;
            this.last = newMail;
            this.length++;
        }
    }

    dequeue() {
        if (this.length === 0) {
            throw new Error("Empty queue");
        }

        let firstMail = this.first;

        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }

        this.length--;

        return {
            from: firstMail.from,
            to: firstMail.to,
            body: firstMail.body,
            subject: firstMail.subject,
        };
    }

    peek() {
        return this.first;
    }

    size() {
        return this.length;
    }
}




//Ejemplo 1
//Input:
const emailQueue = new Queue();
emailQueue.enqueue(
    'jane@ejemplo.com',
    'support@ejemplo.com',
    'No puedo iniciar sesión en mi cuenta',
    'Problema de inicio de sesión'
);
emailQueue.enqueue(
    'joe@ejemplo.com',
    'support@ejemplo.com',
    'Mi pedido no ha llegado todavía',
    'Estado del pedido'
);
console.log(emailQueue.dequeue());
console.log(emailQueue.size());
//Output:
/*{
    from: 'jane@ejemplo.com',
    to: 'support@ejemplo.com',
    body: 'No puedo iniciar sesión en mi cuenta',
    subject: 'Problema de inicio de sesión'
}*/
console.log("5"+3)